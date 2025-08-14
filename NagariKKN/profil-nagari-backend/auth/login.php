<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../utils.php';
cors_headers();

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if (!$email || !$password) json_response(['error' => 'Email & password wajib'], 400);

$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT * FROM users WHERE email=? LIMIT 1');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    json_response(['error' => 'Kredensial salah'], 401);
}

// buat token random dan simpan
$token = bin2hex(random_bytes(32));
$ttl = (require __DIR__ . '/../.env.php')['TOKEN_TTL_MINUTES'];
$expires = (new DateTime("now"))->add(new DateInterval('PT' . $ttl . 'M'))->format('Y-m-d H:i:s');
$pdo->prepare('INSERT INTO tokens (user_id, token, expires_at) VALUES (?,?,?)')->execute([$user['id'], $token, $expires]);

json_response(['token' => $token, 'user' => ['id' => $user['id'], 'name' => $user['name'], 'email' => $user['email']]]);