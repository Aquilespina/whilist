<?php
include "../php/conexion.php";  //incluye el archivo de conexion
$Nombre= $_POST['Nombre'];
$ap = $_POST['ap'];
$correo = $_POST['correo'];
$producto = $_POST['producto'];
$cantidad= $_POST['cantidad'];


$query = "INSERT INTO compra(Nombre,ap,correo,producto,cantidad) 
    VALUES('$Nombre','$ap','$correo','$producto,$cantidad)";
 //Realiaza la consulta de datos por medio de un mensaje de script 
if(mysqli_query($conexion,$query)){
    echo '
    <script>   
    alert("Datos enviadoso a la base de datos");
    window.location = "../index.html";
    </script>
    ';
}
else{
    echo '
    <script>   
    alert("Error al registrar usuario");
    window.location = "../menu/iniciarsesion.php";
    </script>
    ';
}

?>