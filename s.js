<<<<<<< HEAD
const contadores = document.querySelectorAll(".contador");
const sumadores = document.querySelectorAll(".mas");
const restadores = document.querySelectorAll(".menos");
const selectButtons = document.querySelectorAll(".select-button");
const formulario = document.getElementById("formulario");
const infoSeleccion = document.getElementById("infoSeleccion");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const numeroCelularInput = document.getElementById("numeroCelular");
const nombreProductoInput = document.getElementById("nombreProducto"); // Agregado un input para el nombre del producto
const productosSeleccionados = {};
const prevValues = [];
=======
// Seleccionar elementos del DOM y almacenarlos en variables
var contadores = document.querySelectorAll(".contador");
var sumadores = document.querySelectorAll(".mas");
var restadores = document.querySelectorAll(".menos");
var selectButtons = document.querySelectorAll(".select-button");
var formulario = document.getElementById("formulario");
var infoSeleccion = document.getElementById("infoSeleccion");
var nombreInput = document.getElementById("nombre");
var correoInput = document.getElementById("correo");
var productosSeleccionados = {};
var prevValues = [];
>>>>>>> 753124a511db699726fe872a42a496abe2955034

// Función para validar y calcular valores en los contadores
function calcular(index) {
    const value = contadores[index].value;
    const isValid = /^[0-9][0-9]*$/.test(value);
    if (!isValid) {
        contadores[index].value = prevValues[index];
    } else {
        prevValues[index] = value;
    }
}

<<<<<<< HEAD
function agregarProducto(numero, valor, nombreProducto) {
=======
// Función para agregar un producto a la lista de productos seleccionados
function agregarProducto(numero, valor) {
    var botonSeleccionado = selectButtons[numero - 1];
    var nombreProducto = botonSeleccionado.getAttribute("data-product");
    
>>>>>>> 753124a511db699726fe872a42a496abe2955034
    if (productosSeleccionados.hasOwnProperty(numero)) {
        productosSeleccionados[numero].valor = valor;
    } else {
        productosSeleccionados[numero] = { nombre: nombreProducto, valor: valor };
        mostrarInfoSeleccion(numero, valor, nombreProducto);
        // Actualiza el campo oculto con el valor de nombreProducto
        nombreProductoInput.value = nombreProducto;
    }
    actualizarFormulario();
}

<<<<<<< HEAD
function mostrarInfoSeleccion(numero, valor, nombreProducto) {
    const infoDiv = document.createElement("div");

=======
// Función para mostrar información de selección
function mostrarInfoSeleccion(numero, valor, nombreProducto) {
    var infoDiv = document.createElement("div");
>>>>>>> 753124a511db699726fe872a42a496abe2955034
    infoSeleccion.appendChild(infoDiv);
}

// Función para actualizar el formulario con productos seleccionados
function actualizarFormulario() {
    formulario.style.display = "block";
    nombreInput.focus();
    formulario.innerHTML = "";

    for (const numero in productosSeleccionados) {
        const producto = productosSeleccionados[numero];
        const infoDiv = document.createElement("div");
        infoDiv.textContent = `${producto.nombre}: ${producto.valor}`;
        formulario.appendChild(infoDiv);
    }

    const br = document.createElement("br");

    formulario.appendChild(br);
    formulario.appendChild(document.createTextNode("Nombre: "));
    formulario.appendChild(nombreInput);

    formulario.appendChild(br);
    formulario.appendChild(document.createTextNode("Correo Electrónico: "));
    formulario.appendChild(correoInput);

    formulario.appendChild(br);
    formulario.appendChild(document.createTextNode("Numero celular: "));
<<<<<<< HEAD
    formulario.appendChild(numeroCelularInput);
=======
    formulario.appendChild(numeroCelularInput); // Corregir: No se define 'numeroCelularInput'
    
    formulario.appendChild(document.createElement("br"));
>>>>>>> 753124a511db699726fe872a42a496abe2955034


    const listaProductosDiv = document.createElement("div");

    for (const numero in productosSeleccionados) {
        const producto = productosSeleccionados[numero];
        const productoDiv = document.createElement("div");
   
        listaProductosDiv.appendChild(productoDiv);
    }

    formulario.appendChild(listaProductosDiv);

    formulario.appendChild(br);

    const enviarButton = document.createElement("input");
    enviarButton.type = "submit";
    enviarButton.value = "Enviar";
    formulario.appendChild(enviarButton);
}

<<<<<<< HEAD
selectButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const valor = contadores[index].value;
=======
// Agregar controladores de eventos a los botones de selección
selectButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        var valor = contadores[index].value;
>>>>>>> 753124a511db699726fe872a42a496abe2955034
        if (valor !== "") {
            const botonSeleccionado = selectButtons[index];
            const nombreProducto = botonSeleccionado.getAttribute("data-product");
            agregarProducto(index + 1, valor, nombreProducto);
        }
    });
});

<<<<<<< HEAD
sumadores.forEach((sumador, index) => {
    sumador.addEventListener("click", () => {
        contadores[index].value = String(Number(contadores[index].value) + 1);
=======
// Agregar controladores de eventos a los botones de suma
for (var i = 0; i < sumadores.length; i++) {
    sumadores[i].addEventListener("click", function(event) {
        var index = Array.from(sumadores).indexOf(event.target);
        contadores[index].value = Number(contadores[index].value) + 1;
>>>>>>> 753124a511db699726fe872a42a496abe2955034
        calcular(index);
    });
});

<<<<<<< HEAD
restadores.forEach((restador, index) => {
    restador.addEventListener("click", () => {
        contadores[index].value = String(Number(contadores[index].value) - 1);
=======
// Agregar controladores de eventos a los botones de resta
for (var i = 0; i < restadores.length; i++) {
    restadores[i].addEventListener("click", function(event) {
        var index = Array.from(restadores).indexOf(event.target);
        contadores[index].value = Number(contadores[index].value) - 1;
>>>>>>> 753124a511db699726fe872a42a496abe2955034
        calcular(index);
    });
});

<<<<<<< HEAD
contadores.forEach((contador, index) => {
    contador.addEventListener("change", () => calcular(index));
=======
// Agregar controladores de eventos a los contadores para cambios y teclas presionadas
for (var i = 0; i < contadores.length; i++) {
    contadores[i].addEventListener("change", function(event) {
        var index = Array.from(contadores).indexOf(event.target);
        calcular(index);
    });
>>>>>>> 753124a511db699726fe872a42a496abe2955034

    contador.addEventListener("keyup", (event) => {
        if (contadores[index].value === "") {
            return;
        }
        calcular(index);
    });
});
