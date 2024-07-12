/*eva_ejercicio_2_13.js*/

let formulario = document.querySelector("#formulario");
let resultadoDiv = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores de los lados desde los inputs
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);

    // Validar que los valores ingresados sean números válidos y mayores que cero
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Ingrese longitudes válidas para los lados del triángulo.");
        return;
    }

    // Función para calcular el área del triángulo usando la fórmula de Herón
    let calcularAreaTriangulo = (a, b, c) => {
        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    };

    // Calcular el área del triángulo
    let area = calcularAreaTriangulo(lado1, lado2, lado3);

    // Mostrar los resultados en una tabla
    let msg = `<table class='table table-bordered'>
                <thead>
                    <tr><th>No</th><th>Área del triángulo</th></tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>${area.toFixed(2)}</td></tr>
                </tbody>
               </table>`;
               // Mostrar la tabla con los resultados
    resultadoDiv.innerHTML = msg;
});