<?php

require_once('../common/connection.php');
require_once('../common/logger.php');

sleep('1'); // mimic a 'real' server, kinda...

$db = new DbConnect($admin, $pass);

$user_name = $_GET['user_name'];
$user_pass = $_GET['user_pass'];

$sql = "CREATE USER '$user_name'@'localhost' IDENTIFIED BY '$user_pass'";
logger($sql);

$result = $db->conn->query($sql);

if ($result) {
    logger("created user");
    echo "created user $db_name";
} else {
    logger($db->conn->error);
}
