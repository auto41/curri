/*
EL Dom es la estructura de objetos que genera el 
navegador cuando se carga un documento y se puede alterar mediante
javascript para cambiar dinamicamente los contenidos y aspecto de la pagina
*/
 
 
//una referencia a la capa definida en el html
let capa = document .querySelector("#capa"); /* se manda a llamar la clase a traves de querySelector
                                              para llamar solo un elemento se invoca mediante "#"*/
capa.style.width ="100px";
capa.style.height ="100px";
capa.style.background= "red";
 
//una referencia a todos los elementos div
let capas = document.querySelectorAll(".capas");   // Para seleccionar todos los elementos, esta es 
                                                   //una clase se llama mediante un "."
console.log(capas);
 
 
for(let i = 0; i < capas.length;i++){  //Arreglo para modificar los atributos del arreglo
    capas[i].style.margin = "2px";
    capas[i].style.width = "100px";
    capas[i].style.heighth = "100px";
    capas[i].style.background = "blue";
}