<?php

include 'conexion.php';
	$con =conectar();

	$Id=$_POST['Id'];
	$Titulo=$_POST['Titulo'];
	$Autor=$_POST['Autor'];
	$Editorial=$_POST['Editorial'];
	$Tipo=$_POST['tipo'];
	$Ejemplares=$_POST['Ejemplares'];

	//Se hace la sentencia sql
	$sql="INSERT INTO libro (Id,Titulo,Autor,Editorial, Cantidad) VALUES ( '$Id', '$Titulo', '$Autor', '$Editorial', '$Ejemplares' )";
	$sql2="INSERT INTO tipo ( Tipo, Id_libro ) VALUES ('$Tipo', '$Id')";
	//se ejecuta
	
	/*$ejecutar=mysqli_query($con, $sql);
	
	if ($ejecutar) {
		echo "Datos guardados correctamente <br><a href='libros.php'>Volver</a>";
	}else{
		echo "error, no se guardaron los datos <br><a href='libros.php'>Volver</a>";
		
	}*/

	if (mysqli_query($con, $sql)) {
      echo "Nuevo Libro fue añadido correctamente";
	} else {
	      echo "Error: " . $sql . "<br>" . mysqli_error($con);
	}
	if (mysqli_query($con, $sql2)) {
      echo "<br>Se añadieron datos a la tabla tipo de libro <br><a href='libros.php'>Volver</a>";
	} else {
	      echo "Error: " . $sql2 . "<br>" . mysqli_error($con);
	}
	mysqli_close($con);


?>