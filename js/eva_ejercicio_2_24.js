/*eva_ejercicio_2_24.js*/
document.addEventListener("DOMContentLoaded", () => {
    let tabla = document.querySelector("#tabla");
    let btnContar = document.querySelector("#btncontar");
    let formulario = document.querySelector("#formulario");
    let inputPalabra = document.querySelector("#palabra");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar que se envíe el formulario y se recargue la página

        // Obtener la palabra ingresada por el usuario
        let palabra = inputPalabra.value.trim().toLowerCase();

        if (palabra === "") {
            alert("Por favor ingrese una palabra válida.");
            return;
        }

        // Contar ocurrencias de cada letra
        let contarLetras = (palabra) => {
            let ocurrencias = {};
            let i = 0;
            while (i < palabra.length) {
                let letra = palabra[i];
                if (ocurrencias[letra]) {
                    ocurrencias[letra]++;
                } else {
                    ocurrencias[letra] = 1;
                }
                i++;
            }
            return ocurrencias;
        };

        // Obtener objeto con las ocurrencias de letras
        let ocurrencias = contarLetras(palabra);

        // Mostrar los resultados en la tabla
        mostrarResultados(ocurrencias);
    });

    // Función para mostrar los resultados en la tabla
    let mostrarResultados = (ocurrencias) => {
        let msg = "<table class='table table-bordered'>";
        msg += "<thead><tr><th>Letra</th><th>Ocurrencias</th></tr></thead>";
        msg += "<tbody>";

        // Iterar sobre las letras únicas del objeto ocurrencias usando while
        let i = 0;
        let letras = [];
        let j;

        for (let letra in ocurrencias) {
            letras.push(letra);
        }

        while (i < letras.length) {
            let letra = letras[i];
            let cantidad = ocurrencias[letra];
            msg += "<tr>";
            msg += `<td>${letra}</td>`;
            msg += `<td>${cantidad}</td>`;
            msg += "</tr>";

            i++;
        }
        msg += "</tbody></table>";

        tabla.innerHTML = msg;
    };
});