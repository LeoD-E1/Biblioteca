<?php

include 'conexion.php';
	$con =conectar();

//Se recuperan los datos del formulario
	$Dni=$_POST['dni'];
	$Nombre=$_POST['nya'];
	$Telefono=$_POST['telefono'];

	//Se insertan los datos ingresados mediante el formulario
	$sql="INSERT INTO socio ( Dni,Nya,Telefono) VALUES ( '$Dni', '$Nombre', '$Telefono' )";

	//Vericamos si todo es correcto
	if (mysqli_query($con, $sql)) {
      echo "Nuevo Socio ".$Nombre . " fue añadido correctamente ";
	} else {
	      echo "Error: " . $sql . "<br>" . mysqli_error($con);
	}
	mysqli_close($con);
?>
