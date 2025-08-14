<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../utils.php';
cors_headers();
$user = auth_user();

$id = intval($_GET['id'] ?? 0);
if ($id <= 0) json_response(['error' => 'Invalid id'], 400);

$pdo = get_pdo();
$pdo->prepare('DELETE FROM articles WHERE id=?')->execute([$id]);
json_response(['message' => 'Deleted']);