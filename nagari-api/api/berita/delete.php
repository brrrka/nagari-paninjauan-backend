<?php
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

if (!empty($data->id)) {
    $berita->id = $data->id;

    if ($berita->delete()) {
        http_response_code(200);
        echo json_encode(array("message" => "Berita was deleted successfully."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to delete berita."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to delete berita. ID is required."));
}
