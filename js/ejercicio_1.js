//ejercicio_1.js

let tabla = document.querySelector("#tabla");
let boton1 = document.querySelector("#boton1");
//let boton2 = document.querySelector("#boton2")

let est1 = {
    "matricula": 100,
    "nombre": "Alberto",
    "promedio": 7.0
};

let est2 = {
    "matricula": 200,
    "nombre": "Sandra",
    "promedio": 8.5
};

let est3 = {
    "matricula": 300,
    "nombre": "Hugo",
    "promedio": 9.3
};

let estudiantes = [est1, est2, est3]; //arreglo de objetos de tipo entero y string
console.log(estudiantes);

boton1.addEventListener("click", () => { //devolvera los estudiantes
    let msg = "<table class='table table-bordered'>";  //cuando ya se usaron las comillas dobles
    //se puede ocupar el apostrofe
    msg += "<thead><tr><th>Matricula</th><th>Nombre(s)</th><th>Promedio</th><th>Estatus</th><th>Colegiatura</th><th>Operaciones</th></tr></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < estudiantes.length) {
        msg += "<tr>";
        msg += `<td>${estudiantes[i].matricula}</td>`;
        msg += `<td>${estudiantes[i].nombre}</td>`;
        msg += `<td>${estudiantes[i].promedio}</td>`;
        msg += `<td>${estatus(estudiantes[i].promedio)}</td>`;
        msg += `<td>${colegiatura(estudiantes[i].promedio)}</td>`;
        msg += `<td><button>Eliminar</button>&nbsp;<button>Editar</button></td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    //msg+="<button id='boton2'>Agregar</button>" 
    tabla.innerHTML = msg;
});

let estatus = (promedio) => {
    if (promedio >= 8) return "<span class='text-primary'>Aprobado</span>";
    else return "<span class='text-danger'>Reprobado</span>";
}

let colegiatura = (promedio) => {
    let cole = 1800.0;
    if (promedio >= 9.5 && promedio <= 10.0) {
        return 1200.0;
    } else if (promedio >= 9.0 && promedio <= 9.4) {
        return cole * 0.5;
    } else {
        return cole;
    }
};

let formulario = document.querySelector("#formulario");
let er = document.querySelector("#error");

formulario.addEventListener("submit", (event) => {
    let m = document.querySelector("#matricula").value;
    let n = document.querySelector("#nombre").value;
    let p = document.querySelector("#promedio").value;

    /*console.log(m)
    console.log(n)
    console.log(p)*/

    let centinela = false;
    let error = "";
    if (m.trim().length === 0) {  //poner operador and o or
        error += "<span class='text-danger'>Debe proporcionar su matricula</span>";
        centinela = true;
    }
    if (centinela) {
        er.innerHTML = error;
    } else {
        let e = { "matricula": m, "nombre": n, "promedio": p };
        estudiantes.push(e);
        // Limpia el formulario después de agregar
        document.getElementById("formulario").reset();
        // Actualiza la tabla
        boton1.click(); // Simula un click en el botón para actualizar la tabla
    }
    event.preventDefault();
});