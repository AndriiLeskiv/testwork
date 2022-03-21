<?php
require_once '../config/db.php';

$profession = $_POST['profession'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$passworld = $_POST['passworld'];
$shcool = $_POST['school'];
$currentgrade = $_POST['currentgrade'];
$create_date = $_POST['data'];
$online_search = $_POST['online_search'];
    
mysqli_query($connect, "insert into user(id, profession, firstname, lastname, email, password, school, currentgrade, data, online_search)
value (null, '$profession', '$firstname', '$lastname', '$email', '$passworld', '$shcool','$currentgrade', '$create_date' '$online_search')");

header('Location: ../index.php');