<?php
include 'dbinfo.php';

error_reporting(E_ALL);
ini_set('display_errors', '1');

if (mysql_connect($host, $login, $pwd) and mysql_select_db($db)) {
    mysql_query('SET CHARACTER SET utf8');
	$result = mysql_query("SELECT * FROM news WHERE 1");
	$rows = array();
	while ($r = mysql_fetch_assoc($result)) {
		$rows[] = $r;
	}
	header('Content-Type: application/json');
	echo(json_encode($rows));
	mysql_close();
}
?>