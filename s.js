// JavaScript
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

function calcular(index) {
    var value = contadores[index].value;
    var isValid = /^[0-9][0-9]*$/.test(value);
    if (!isValid) {
        contadores[index].value = prevValues[index];
    } else {
        prevValues[index] = value;
    }
}

function agregarProducto(numero, valor) {
    var botonSeleccionado = selectButtons[numero - 1];
    var nombreProducto = botonSeleccionado.getAttribute("data-product");
    
    if (productosSeleccionados.hasOwnProperty(numero)) {
        productosSeleccionados[numero].valor = valor;
    } else {
        productosSeleccionados[numero] = { nombre: nombreProducto, valor: valor };
        mostrarInfoSeleccion(numero, valor, nombreProducto);
    }
    actualizarFormulario();
}


function mostrarInfoSeleccion(numero, valor, nombreProducto) {
    var infoDiv = document.createElement("div");

    infoSeleccion.appendChild(infoDiv);
}

function actualizarFormulario() {
    formulario.style.display = "block"; // Mostrar el formulario después de seleccionar productos
    nombreInput.focus(); // Colocar el foco en el campo de nombre

    // Limpia el formulario
    formulario.innerHTML = "";

    // Agrega campos para los productos seleccionados
    for (var numero in productosSeleccionados) {
        var producto = productosSeleccionados[numero];

        // Agrega la información del producto
        var infoDiv = document.createElement("div");
        infoDiv.textContent =  producto.nombre ;
        formulario.appendChild(infoDiv);

        // Agrega el valor del producto
        var nuevoCampo = document.createElement("input");
        nuevoCampo.type = "text";
        nuevoCampo.value = producto.valor;
        nuevoCampo.readOnly = true;
        formulario.appendChild(nuevoCampo);
    }

    // Agrega campos para el nombre y el correo electrónico
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createTextNode("Nombre: "));
    formulario.appendChild(nombreInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createTextNode("Correo Electrónico: "));
    formulario.appendChild(correoInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));

    // Botón para enviar el formulario
    var enviarButton = document.createElement("input");
    enviarButton.type = "submit";
    enviarButton.value = "Enviar";
    formulario.appendChild(enviarButton);
}

selectButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        var valor = contadores[index].value;
        if (valor !== "") {
            agregarProducto(index + 1, valor);
        }
    });
});

for (var i = 0; i < sumadores.length; i++) {
    sumadores[i].addEventListener("click", function(event) {
        var index = Array.from(sumadores).indexOf(event.target);
        contadores[index].value = Number(contadores[index].value) + 1;
        calcular(index);
    });
}

for (var i = 0; i < restadores.length; i++) {
    restadores[i].addEventListener("click", function(event) {
        var index = Array.from(restadores).indexOf(event.target);
        contadores[index].value = Number(contadores[index].value) - 1;
        calcular(index);
    });
}

for (var i = 0; i < contadores.length; i++) {
    contadores[i].addEventListener("change", function(event) {
        var index = Array.from(contadores).indexOf(event.target);
        calcular(index);
    });

    contadores[i].addEventListener("keyup", function(event) {
        var index = Array.from(contadores).indexOf(event.target);
        if (contadores[index].value === "") {
            return;
        }
        calcular(index);
    });
}

