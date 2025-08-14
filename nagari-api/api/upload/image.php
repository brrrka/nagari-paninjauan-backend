<?php
// Tambahkan CORS headers
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Debug logging
error_log("Upload request received. Method: " . $_SERVER['REQUEST_METHOD']);
error_log("Files: " . print_r($_FILES, true));

// Buat direktori uploads jika belum ada - gunakan path relatif
$upload_dir = '../../uploads/images/';
if (!file_exists($upload_dir)) {
    mkdir($upload_dir, 0777, true);
    error_log("Created upload directory: " . realpath($upload_dir));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    error_log("Processing POST request for file upload");

    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['image'];
        error_log("File received: " . $file['name'] . ", Size: " . $file['size'] . ", Type: " . $file['type']);

        // Validasi file
        $allowed_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        $max_size = 5 * 1024 * 1024; // 5MB

        // Cek MIME type
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime_type = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        error_log("Detected MIME type: " . $mime_type);

        if (!in_array($mime_type, $allowed_types) && !in_array($file['type'], $allowed_types)) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(array("error" => "File type not allowed. Only JPG, PNG, GIF, and WebP are allowed."));
            exit;
        }

        if ($file['size'] > $max_size) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(array("error" => "File too large. Maximum size is 5MB."));
            exit;
        }

        // Generate unique filename
        $file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        $filename = uniqid() . '_' . time() . '.' . $file_extension;
        $filepath = $upload_dir . $filename;

        error_log("Attempting to move file to: " . $filepath);

        if (move_uploaded_file($file['tmp_name'], $filepath)) {
            $image_url = '/uploads/images/' . $filename;

            error_log("File uploaded successfully. URL: " . $image_url);

            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode(array(
                "success" => true,
                "imageUrl" => $image_url,
                "filename" => $filename
            ));
        } else {
            error_log("Failed to move uploaded file. Check permissions on: " . $upload_dir);
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode(array("error" => "Failed to upload file. Check server permissions."));
        }
    } else {
        $error_message = "No file uploaded";
        if (isset($_FILES['image'])) {
            switch ($_FILES['image']['error']) {
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    $error_message = "File too large";
                    break;
                case UPLOAD_ERR_PARTIAL:
                    $error_message = "File upload was interrupted";
                    break;
                case UPLOAD_ERR_NO_FILE:
                    $error_message = "No file was uploaded";
                    break;
                case UPLOAD_ERR_NO_TMP_DIR:
                    $error_message = "Missing temporary folder";
                    break;
                case UPLOAD_ERR_CANT_WRITE:
                    $error_message = "Failed to write file to disk";
                    break;
                case UPLOAD_ERR_EXTENSION:
                    $error_message = "A PHP extension stopped the file upload";
                    break;
            }
        }

        error_log("Upload error: " . $error_message);
        http_response_code(400);
        header('Content-Type: application/json');
        echo json_encode(array("error" => $error_message));
    }
} else {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(array("error" => "Method not allowed."));
}
