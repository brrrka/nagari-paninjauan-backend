<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../utils.php';
cors_headers();
$user = auth_user();

// Expect multipart/form-data
$title = $_POST['title'] ?? '';
$category = $_POST['category'] ?? '';
$date = $_POST['date'] ?? '';
$content_html = $_POST['content_html'] ?? '';
$headline = isset($_POST['headline']) ? (int)$_POST['headline'] : 0;

if (!$title || !$category || !$date || !$content_html) {
    json_response(['error' => 'Field wajib belum lengkap'], 400);
}

$image_url = save_uploaded_image('image'); // bisa null

$pdo = get_pdo();
$stmt = $pdo->prepare('INSERT INTO articles (title, category, date, image_url, content_html, headline) VALUES (?,?,?,?,?,?)');
$stmt->execute([$title, $category, $date, $image_url, $content_html, $headline]);

json_response(['message' => 'Created', 'id' => (int)$pdo->lastInsertId()]);