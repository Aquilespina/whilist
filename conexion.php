<?php
// Comprobar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $productosSeleccionados = $_POST["productosSeleccionados"]; // Este es un arreglo con la información de productos y valores

    // Conexión a la base de datos (configura estos valores)
    $servername = "tu_servidor";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $dbname = "tu_base_de_datos";

<<<<<<< HEAD
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
=======
    // Crear una conexión a la base de datos (puedes usar MySQLi o PDO)
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Comprobar la conexión
    if ($conn->connect_error) {
        die("Error en la conexión a la base de datos: " . $conn->connect_error);
    }

    // Insertar datos del formulario en la tabla de pedidos
    $sql = "INSERT INTO pedidos (nombre, correo, productos) VALUES ('$nombre', '$correo', '$productosSeleccionados')";

    if ($conn->query($sql) === TRUE) {
        echo "El pedido se ha registrado con éxito.";
    } else {
        echo "Error al registrar el pedido: " . $conn->error;
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
}
?>
>>>>>>> 753124a511db699726fe872a42a496abe2955034
