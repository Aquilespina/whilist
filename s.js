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

function calcular(index) {
    const value = contadores[index].value;
    const isValid = /^[0-9][0-9]*$/.test(value);
    if (!isValid) {
        contadores[index].value = prevValues[index];
    } else {
        prevValues[index] = value;
    }
}

function agregarProducto(numero, valor, nombreProducto) {
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

function mostrarInfoSeleccion(numero, valor, nombreProducto) {
    const infoDiv = document.createElement("div");

    infoSeleccion.appendChild(infoDiv);
}

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
    formulario.appendChild(numeroCelularInput);


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

selectButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const valor = contadores[index].value;
        if (valor !== "") {
            const botonSeleccionado = selectButtons[index];
            const nombreProducto = botonSeleccionado.getAttribute("data-product");
            agregarProducto(index + 1, valor, nombreProducto);
        }
    });
});

sumadores.forEach((sumador, index) => {
    sumador.addEventListener("click", () => {
        contadores[index].value = String(Number(contadores[index].value) + 1);
        calcular(index);
    });
});

restadores.forEach((restador, index) => {
    restador.addEventListener("click", () => {
        contadores[index].value = String(Number(contadores[index].value) - 1);
        calcular(index);
    });
});

contadores.forEach((contador, index) => {
    contador.addEventListener("change", () => calcular(index));

    contador.addEventListener("keyup", (event) => {
        if (contadores[index].value === "") {
            return;
        }
        calcular(index);
    });
});
