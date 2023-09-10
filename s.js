
// JavaScript
var contadores = document.querySelectorAll(".contador");
var sumadores = document.querySelectorAll(".mas");
var restadores = document.querySelectorAll(".menos");
var seleccionarBoton = document.getElementById("seleccionar");
var formulario = document.getElementById("formulario");
var valor1Input = document.getElementById("valor1");
var valor2Input = document.getElementById("valor2");

var prevValues = [];

function calcular(index) {
    var value = contadores[index].value;
    var isValid = /^[1-9][0-9]*$/.test(value);
    if (!isValid) {
        contadores[index].value = prevValues[index];
    } else {
        prevValues[index] = value;
    }
}

seleccionarBoton.addEventListener("click", function() {
    valor1Input.value = contadores[0].value;
    valor2Input.value = contadores[1].value;
    // Agrega más asignaciones de valores a campos del formulario según sea necesario
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