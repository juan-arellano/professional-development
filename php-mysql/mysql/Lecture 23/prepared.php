<?php
$servername = "localhost";
$username = "root";
$password = "test2";
$dbname = "mywebsite";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email) VALUES (?, ?, ?)");

$stmt->bind_param("sss", $firstname, $lastname, $email);

$firstname = "Lewis";
$lastname = "Hall";
$email = "lewis@me.com";
$stmt->execute();

$firstname = "Allen";
$lastname = "Moore";
$email = "allen@me.com";
$stmt->execute();

$firstname = "Dave";
$lastname = "Jones";
$email = "dave@me.com";
$stmt->execute();

echo "New Records Created";

$stmt->close();
$conn->close();
?>