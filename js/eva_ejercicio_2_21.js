/*eva_ejercicio_2_21.js*/

document.addEventListener("DOMContentLoaded", () => {
    let resultadoDiv = document.getElementById('resultado');

    let suma = 0;

    // Función para generar la serie de números y mostrarlos
    let generarSerieYMostrar = () => {
        let msg = `<p>Números de la serie:</p>`;

        // Generar la serie de números y sumarlos
        let i=1;
        while ( i <= 33) { // 33 es el número máximo de elementos en la serie hasta 99
            let numero = i * 3;
            suma += numero;

            // Agregar número al mensaje
            msg += `<p>${numero}</p>`;
            i++
        }

        msg += `<p>Total de la suma: ${suma}</p>`;

        // Mostrar los resultados en el div
        resultadoDiv.innerHTML = msg;
    };

    // Llamar a la función para generar la serie y mostrar los resultados
    generarSerieYMostrar();
});