<?php
include "../php/conexion.php";  //incluye el archivo de conexion
// Procesa los datos del formulario si se ha enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    
    // Inserta los datos en la tabla correspondiente (ajusta el nombre de la tabla)


    // Obtiene los productos seleccionados y la cantidad
    foreach ($_POST["productos"] as $numero => $cantidad) {
        $nombreProducto = $_POST["nombre_producto"][$numero];
        $valorProducto = $_POST["valor_producto"][$numero];
        $sql = "INSERT INTO regalos (nombre, correo, producto, valor) VALUES ('$nombre', '$correo', '$nombreProducto', '$valorProducto')";
        
        if ($conn->query($sql) !== TRUE) {
            echo "Error al insertar producto: " . $conn->error;
        }
    }
}

// Cierra la conexión a la base de datos
$conn->close();
?>