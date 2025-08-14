<?php
require __DIR__ . '/db.php';
require __DIR__ . '/utils.php';
cors_headers();

$limit = min(10, max(1, intval($_GET['limit'] ?? 3)));
$pdo = get_pdo();
$stmt = $pdo->prepare("SELECT * FROM articles ORDER BY date DESC, id DESC LIMIT $limit");
$stmt->execute();
json_response(['data' => $stmt->fetchAll()]);