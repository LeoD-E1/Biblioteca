<?php

	function conectar(){
		$user = "root";
		$pass="";
		$server ="localhost";
		$db="biblioteca";
		$con=mysqli_connect( $server, $user, "" );
		mysqli_select_db( $con, $db );

		return $con;
	}
?>
