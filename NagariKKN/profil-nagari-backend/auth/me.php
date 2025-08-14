<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../utils.php';
cors_headers();

$user = auth_user();
json_response(['user' => ['id' => $user['user_id'], 'name' => $user['name'], 'email' => $user['email']]]);