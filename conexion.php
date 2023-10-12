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
