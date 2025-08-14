<?php
$config = require __DIR__ . '/.env.php';

function cors_headers()
{
    global $config;
    header('Access-Control-Allow-Origin: ' . $config['CORS_ORIGIN']);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
}

function json_response($data, $code = 200)
{
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function auth_user()
{
    // Bearer token -> cek di tabel tokens
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (preg_match('/Bearer\s+(.*)/i', $auth, $m)) {
        $token = $m[1];
        $pdo = get_pdo();
        $stmt = $pdo->prepare('SELECT t.*, u.id as user_id, u.name, u.email FROM tokens t JOIN users u ON u.id=t.user_id WHERE t.token=? AND t.expires_at > NOW()');
        $stmt->execute([$token]);
        $row = $stmt->fetch();
        if ($row) return $row; // user & token row
    }
    json_response(['error' => 'Unauthorized'], 401);
}

function save_uploaded_image($field = 'image')
{
    global $config;
    if (!isset($_FILES[$field]) || $_FILES[$field]['error'] !== UPLOAD_ERR_OK) return null;

    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
    $mime = mime_content_type($_FILES[$field]['tmp_name']);
    if (!isset($allowed[$mime])) {
        json_response(['error' => 'Format gambar tidak didukung'], 400);
    }
    if (!is_dir($config['UPLOAD_DIR'])) mkdir($config['UPLOAD_DIR'], 0777, true);
    $ext = $allowed[$mime];
    $filename = uniqid('img_', true) . '.' . $ext;
    $dest = $config['UPLOAD_DIR'] . '/' . $filename;
    if (!move_uploaded_file($_FILES[$field]['tmp_name'], $dest)) {
        json_response(['error' => 'Gagal menyimpan file'], 500);
    }
    return $config['BASE_URL'] . '/uploads/' . $filename;
}

// OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    cors_headers();
    http_response_code(204);
    exit;
}