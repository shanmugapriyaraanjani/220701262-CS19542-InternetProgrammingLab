<?php
header("Content-Type: application/json");

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'];
$password = $input['password'];

$conn = new mysqli('localhost', 'root', '', 'inventory_db');
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Connection failed.']);
    exit();
}

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid password.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'User not found.']);
}

$conn->close();
?>
