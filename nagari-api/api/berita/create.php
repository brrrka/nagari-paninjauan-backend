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

session_start();

// Check if admin is logged in
if (!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized. Please login."));
    exit;
}

$database = new Database();
$db = $database->getConnection();
$berita = new Berita($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->title) &&
    !empty($data->category) &&
    !empty($data->date) &&
    !empty($data->content)
) {
    $berita->title = $data->title;
    $berita->category = $data->category;
    $berita->date = $data->date;
    $berita->imageUrl = $data->imageUrl ?? '';
    $berita->headline = isset($data->headline) ? ($data->headline ? 1 : 0) : 0;
    $berita->content = $data->content;

    if ($berita->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Berita was created successfully."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create berita."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create berita. Data is incomplete."));
}
