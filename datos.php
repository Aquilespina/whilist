<?php
include 'conexion.php';  //incluye el archivo de conexion
// Procesa los datos del formulario si se ha enviado

    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $nombreProducto = $_POST['nombreProducto'];
    $valor = $_POST['valor'];
    
    // Inserta los datos en la tabla correspondiente (ajusta el nombre de la tabla)

    $sql = "INSERT INTO cantidad (nombre,correo) VALUES ('$nombre', '$correo', '$nombreProducto', '$valor')";

 
    $ejecutar = mysqli_query($conexion,$sql); //ejecuta la consulta   
if($ejecutar){
    echo '
    <script>   
    alert("Usuario almacenado exitosamente");
    window.location = "../index.php";
    </script>
    ';
}
?>