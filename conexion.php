<?php


$server = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'boda';
    $conexion = mysqli_connect($server, $user, $pass, $db);


if($conexion){
    echo 'Conectado exitosamente a la base de datos';   
}else{  
    echo 'No se pudo conectar a la base de datos';    
}   
?>