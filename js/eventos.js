/*En Javascript existe un concepto llamado evento,
que no es mas que una notificacion de que alguna
caracteristica interesante acaba de ocurrir,
generalmente relacionada con el usuario
que navega por la página.
 
Como desarrolladores, nuestro objetivo es preparar
nuestro código para que cuando ocurra un determinado evento,
se lleve a cabo una funcionaidad asociada.*/
 
let imprimir  = document.querySelector("#imprimir"); // anteriormente se utilizaba el get
let boton2 = document.querySelector("#boton2"); // se hace referencia a dicho elemento //
let boton3 = document.querySelector("#boton3"); // referencia al boton 3
let boton4 = document.querySelector("#boton4"); // referencia al boton 4
let boton5 = document.querySelector("#boton5"); // referencia al boton 5
 
let saludo = () => { // esta es de la notacion ed ma 6
    alert("Buen dia a todos");
}
 
//programar el evento utilizando el escucha de eventos
/*boton2.addEventListener("click", ()=>{
    let nombre = "Jose Alfredo";
    imprimir.innerHTML= `<h1><b>${nombre.toUpperCase()}</b></h1>;` // segunda 
    forma de modificar , con el inner interpreta el HTML
   
});*/
let imprimirNombre= () =>{   // funcion imprimir nombre   -- SEGUNDA MANERA
    let nombre = "Natalia Elizabeth";
    imprimir.innerHTML= `<h1><b>${nombre.toUpperCase()}</b></h1>;` // segunda forma 
    //de modificar , con el inner interpreta el HTML
}
 
boton2.addEventListener("click", imprimirNombre); // solo se invoca al nombre de la funcion
 
//Evento como propiedad
boton3.onmouseover = () => {
    let nombres = ['ana', 'abel', 'omar'];
    let i=0;
    let msg = "";
    while( i< nombres.length){
        msg+=`<p>${nombres[i]}</p>`;
        i++;
 
    }
    imprimir.innerHTML = msg;
}
 
boton3.onmouseout =() =>{   // para que se quite la funcion
    imprimir.textContent ="";
}
 
//objetos en java script
let persona = {
    "id": 1,
    "nombre": "ximena",
    "edad": 12,
    "genero": "Femenino"   // si ya no hay mas valores se deja asi, si no se 
    //pone la coma, y los atributos se ponen en comillas
};
 
boton4.addEventListener("dblclick", () =>{
    let msg = "";
    msg+=`Nombre: ${persona.nombre}<br>`;
    msg+=`Edad: ${persona.edad}<br>`;
    msg+=`Genero: ${persona.genero}<br>`; // o :${persona}["genero"]}  --> segunda forma de obtener datos
    imprimir.innerHTML = msg; // se manda a llamar el msg y se muestran los datos concatenados
});
 
 
let est1 = {
    "matricula":  100,
    "nombre": "Juan"
};
 
let est2 = {
    "matricula":  200,
    "nombre": "Pedro"
};
let est3 = {
    "matricula":  300,
    "nombre": "Pablo"
};
 
let estudiantes = [est1, est2, est3]; // arreglo e objetos de tipo entero y string
console.log(estudiantes);
 
 
 boton5.addEventListener("click", () => { //devolvera los estudiantes
    let msg = "<table class = 'table table-bordered' >";  // cuando ya se usan 
    //comillas dobles se puede ocupar apostrofe
    msg+="<thead><tr><th>Matricula</th><th>Nombre(s)</th></tr></thead>";
    let i = 0;
    msg+="<tbody>";
    while(i< estudiantes.length){
        msg+="<tr>";
        msg+=`<td>${estudiantes[i].matricula}</td>`;
        msg+=`<td>${estudiantes[i].nombre}</td>`;
        msg+="</tr>";
        i++;
    }
    msg+="</tbody></table>";
    tabla.innerHTML = msg;
});            
 
//boton5.addEventListener("click", imprimirDatos); // solo se invoca al nombre de la funcion
//tabla.innerHTML = imprimirDatos(estudiantes);