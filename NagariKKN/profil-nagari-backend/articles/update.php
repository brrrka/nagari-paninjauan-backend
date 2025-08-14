<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../utils.php';
cors_headers();
$user = auth_user();

$id = intval($_GET['id'] ?? 0);
if ($id <= 0) json_response(['error' => 'Invalid id'], 400);

// multipart/form-data agar bisa update gambar opsional
$title = $_POST['title'] ?? null;
$category = $_POST['category'] ?? null;
$date = $_POST['date'] ?? null;
$content_html = $_POST['content_html'] ?? null;
$headline = isset($_POST['headline']) ? (int)$_POST['headline'] : null;

$image_url = save_uploaded_image('image'); // bisa null, jika tidak upload maka null

$pdo = get_pdo();

// build dynamic set
$fields = [];
$params = [];
if ($title !== null) {
    $fields[] = 'title=?';
    $params[] = $title;
}
if ($category !== null) {
    $fields[] = 'category=?';
    $params[] = $category;
}
if ($date !== null) {
    $fields[] = 'date=?';
    $params[] = $date;
}
if ($content_html !== null) {
    $fields[] = 'content_html=?';
    $params[] = $content_html;
}
if ($headline !== null) {
    $fields[] = 'headline=?';
    $params[] = $headline;
}
if ($image_url !== null) {
    $fields[] = 'image_url=?';
    $params[] = $image_url;
}

if (empty($fields)) json_response(['error' => 'Tidak ada perubahan'], 400);
$params[] = $id;

$stmt = $pdo->prepare('UPDATE articles SET ' . implode(',', $fields) . ' WHERE id=?');
$stmt->execute($params);

json_response(['message' => 'Updated']);