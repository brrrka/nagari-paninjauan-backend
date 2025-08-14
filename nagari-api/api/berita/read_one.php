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
$berita->id = isset($_GET["id"]) ? $_GET["id"] : die();

$berita->readOne();

if ($berita->title != null) {
    $berita_arr = array(
        "id" => $berita->id,
        "title" => $berita->title,
        "category" => $berita->category,
        "date" => $berita->date,
        "imageUrl" => $berita->imageUrl,
        "headline" => (bool)$berita->headline,
        "content" => $berita->content
    );

    http_response_code(200);
    echo json_encode($berita_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Berita does not exist."));
}
