<?php
session_start();
include_once '../config/database.php';

if (isset($_SESSION['admin_id'])) {
    http_response_code(200);
    echo json_encode(array(
        "authenticated" => true,
        "admin" => array(
            "id" => $_SESSION['admin_id'],
            "username" => $_SESSION['admin_username']
        )
    ));
} else {
    http_response_code(401);
    echo json_encode(array("authenticated" => false));
}
