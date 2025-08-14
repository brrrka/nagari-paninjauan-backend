<?php
// Tambahkan CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include_once '../config/database.php';
include_once '../models/Berita.php';

$database = new Database();
$db = $database->getConnection();

$berita = new Berita($db);
$stmt = $berita->read();
$num = $stmt->rowCount();

if ($num > 0) {
    $berita_arr = array();
    $berita_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $berita_item = array(
            "id" => $id,
            "title" => $title,
            "category" => $category,
            "date" => $date,
            "imageUrl" => $imageUrl,
            "headline" => (bool)$headline,
            "content" => $content
        );
        array_push($berita_arr["records"], $berita_item);
    }

    http_response_code(200);
    echo json_encode($berita_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No berita found."));
}
