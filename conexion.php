<?php


    $servername = "localhost";
 $username = "id21388328_adm";
 $password = "Producto01#";
 $dbname = "id21388328_regalos";
 
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $numeroCelular = $_POST["numeroCelular"];
    $nombreProducto = $_POST["nombreProducto"];
    $valor = $_POST["valor"];

    if (isset($nombreProducto, $valor)) {
        $sql = "INSERT INTO pedidos (nombre, correo, numeroCelular,nombreProducto,valor) VALUES ($nombre, $correo, $numeroCelular,$nombreProducto,$valor)";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param("ssssd", $nombre, $correo, $numeroCelular, $nombreProducto, $valor);
            
            if ($stmt->execute()) {
                echo "Los datos se han guardado correctamente en la base de datos.";
            } else {
                die("Error al guardar los datos en la base de datos: " . $stmt->error);
            }
        } else {
            die("Error en la preparación de la consulta: " . $conn->error);
        }

        $stmt->close();
    } else {
        echo "Uno o ambos campos no están configurados.";
    }
}

$conn->close();