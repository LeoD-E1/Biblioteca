<?php

include 'conexion.php';
	$con =conectar();

//Se recuperan los datos del formulario
	$Dni=$_POST['dni'];
	$Ejemplar=$_POST['ejemplar'];
	$Retiro=$_POST['retiro'];
	$Devolucion=$_POST['devolucion'];
	
	//Se insertan los datos ingresados mediante el formulario
	$sql="INSERT INTO prestamo ( Id_per,Id_ejem,Fecha_retiro,Fecha_devolucion) VALUES ( '$Dni', '$Ejemplar', '$Retiro', '$Devolucion' )";
	

	//Vericamos si todo es correcto
	if (mysqli_query($con, $sql)) {
      echo "Prestamo realizado por" .$Dni
      ."<br><a href='prestamo.php'>Volver</a>";
	} else {
	      echo "Error: " . $sql . "<br>" . mysqli_error($con);
	}
	mysqli_close($con);
?>