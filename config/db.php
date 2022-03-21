<?php
$connect = mysqli_connect('localhost','root', '', 'testwork');

if (!$connect){
    die('Error connect to database!');
} else {
    die('its`s OK!');
}

extract($_POST);

if (isset($name)){
    $query = mysqli_query($connect, "insert into serialize_data_insert(id,profession, firstname, lastname, email, 
password, school, currentgrade, date)value(null, 'student', 'Andrii', 'Leskiv', 'admin@admin', '11111', 'school','Хороший вибір за хороші гроші', 25-03-2022)")
}