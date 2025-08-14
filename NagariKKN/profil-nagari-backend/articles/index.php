<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../utils.php';
cors_headers();

$pdo = get_pdo();

if (isset($_GET['id'])) {
    $stmt = $pdo->prepare('SELECT * FROM articles WHERE id=?');
    $stmt->execute([intval($_GET['id'])]);
    $row = $stmt->fetch();
    if (!$row) json_response(['error' => 'Not found'], 404);
    json_response(['data' => $row]);
}

$page = max(1, intval($_GET['page'] ?? 1));
$limit = min(50, max(1, intval($_GET['limit'] ?? 10)));
$offset = ($page - 1) * $limit;
$search = trim($_GET['q'] ?? '');

$where = '';
$params = [];
if ($search !== '') {
    $where = 'WHERE title LIKE ? OR category LIKE ?';
    $like = "%$search%";
    $params = [$like, $like];
}

$total = $pdo->prepare("SELECT COUNT(*) c FROM articles $where");
$total->execute($params);
$count = (int)$total->fetch()['c'];

$stmt = $pdo->prepare("SELECT * FROM articles $where ORDER BY date DESC, id DESC LIMIT $limit OFFSET $offset");
$stmt->execute($params);
$rows = $stmt->fetchAll();

json_response(['data' => $rows, 'page' => $page, 'limit' => $limit, 'total' => $count]);