<?php
// seed_admin.php

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/models/Admin.php';

$database = new Database();
$db = $database->getConnection();

$admin = new Admin($db);
$admin->username = 'admin';
$admin->password = 'password123'; // akan di-hash oleh Admin::create()
$admin->email = 'admin@nagari.com';

// Cek apakah username sudah ada
$stmt = $db->prepare("SELECT COUNT(*) FROM admin WHERE username = :username");
$stmt->execute([':username' => $admin->username]);
$exists = $stmt->fetchColumn() > 0;

if ($exists) {
    echo "⚠️ Admin '{$admin->username}' sudah ada. Mengupdate password & email...\n";
    $admin->password = password_hash($admin->password, PASSWORD_DEFAULT);
    $update = $db->prepare("UPDATE admin SET password = :password, email = :email WHERE username = :username");
    $update->execute([
        ':password' => $admin->password,
        ':email'    => $admin->email,
        ':username' => $admin->username
    ]);
    echo "✅ Admin '{$admin->username}' berhasil diupdate.\n";
} else {
    if ($admin->create()) {
        echo "✅ Admin '{$admin->username}' berhasil dibuat.\n";
    } else {
        echo "❌ Gagal membuat admin.\n";
    }
}
