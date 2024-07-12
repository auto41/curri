//ejercicio1.js
 
let nombres= [`natalia maria`, `alberto`, `rosa maria`, `pedro`, `lupe`];
 
let tabla = document.querySelector("#tabla");
 
let mensaje = (nombres)=> {
    let msg = "<table class='table table-bordered table-striped'>";
    msg += "<thead><tr><th>No</th><th>Nombre</th><th>Longitud</th></tr>";
    msg+="</thead>";
    msg+="<tbody>";
    let i=0;
 
    while(i< nombres.length){
        msg+="<tr>";
        msg+=`<td>${i+1}</td>`;
        msg+=`<td>${nombres[i]}</td>`;
        msg+=`<td>${logitud(nombres[i])}</td>`;
        msg+="<td>";
        i++;
    }
    msg+="</tbody>"
    msg+="</table>";
    return msg;
}
 
let logitud = (nombre)=> nombre.length;
 
tabla.innerHTML = mensaje(nombres);