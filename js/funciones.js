// funcion declarativa
 
function miFunction(){
    let x = 2;
    console.log (x)
}
 
//llamado de la funcion
 
miFunction();
 
function raiz (numero){
    console.log(`raiz = ${Math.sqrt(numero)}`);
}
raiz(25);
 
function raiz2(numero){
    return Math.sqrt(numero);
}  
 
let res = raiz2(34);
 
console.log(`raiz = ${res}`);
 
console.log(`raiz = ${raiz2(34)}`);  // segunda forma de calcular raiz sin declarar la variable