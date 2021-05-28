<?php
$insert = false;
if (isset($_POST['name'])) {
    $server = "localhost";
    $username = "root";
    $password = "";
    $con = mysqli_connect($server, $username, $password);
    if (!$con) {
        die("Connectoion failed");
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $sql = "INSERT INTO `cafe`.`cafe`(`name`, `email`, `phone`, `message`,`dt`) VALUES ('$name', '$email', '$phone', '$message', current_timestamp());";
    if ($con->query($sql) == true) {
        $insert = true;
    } else {
        echo "Error : $sql <br> $con->error";
    }
    $con->close();
}
if($insert==true)
{
    header("Location: contact.html");
    exit();
}
?>


