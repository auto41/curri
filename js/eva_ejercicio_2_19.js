/*eva_ejercicio_2_19.js*/
let formulario = document.querySelector("#formulario");
let resultadoDiv = document.querySelector("#resultado");

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores de los números desde los inputs
    let numero1 = parseInt(document.getElementById('numero1').value, 10);
    let numero2 = parseInt(document.getElementById('numero2').value, 10);

    // Validar que ambos valores sean mayores que cero
    if (numero1 <= 0 || numero2 <= 0) {
        alert('Por favor ingrese números enteros válidos mayores que cero.');
        return;
    }

    // Función para calcular el MCD usando el algoritmo de Euclides
    let calcularMCD = (a, b) => {
        let resto;
        while (b !== 0) {
            resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    };

    // Calcular el MCD de los números ingresados
    let mcd = calcularMCD(numero1, numero2);

    // Mostrar los resultados en una tabla
    mostrarResultado(numero1, numero2, mcd);
});

let mostrarResultado = (num1, num2, mcd) => {
    // Crear el HTML para la tabla de resultados
    let tablaHTML = `<table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Número 1</th>
                                <th>Número 2</th>
                                <th>MCD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${num1}</td>
                                <td>${num2}</td>
                                <td>${mcd}</td>
                            </tr>
                        </tbody>
                    </table>`;

    // Mostrar la tabla en el div de resultados
    resultadoDiv.innerHTML = tablaHTML;
};