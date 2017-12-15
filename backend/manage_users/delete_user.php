<?php

require_once('../common/connection.php');

$db = new DbConnect($admin, $pass);

$user_name = $_GET['user_name'];
logger($user_name);

$sql = "DROP USER $user_name@'localhost'";

$result = $db->conn->query($sql);

if ($result) {
    logger("dropped user");
    echo "dropped user $user_name";
} else {
    logger($db->conn->error);
}
