//arreglos.js
 
/*es un conjunto de elementos del mismo tipo o diferente tipo,
para manipular los datos se hace mediante una posición (indice) y
se utiliza un único nombre de variable para acceder a los elementos*/
 
//recupera un elemento
 
/*let numero= numeros[2];
 
//agregar un elemento
 
let dato=0;
numeros[1]=2000;
*/
 
 
//declaracion de un arreglo vacio
 
let arreglo = [];
console.log(arreglo);
 
//declaracion e inicialización de un arreglo
let numeros=[7,50,-30, 10, 100];
console.log(numeros);
let str = [`Juan`, `Pedro`, `Pablo`, `Judas`];
console.log(str);
 
//tamaño de los arreglos
 
console.log(arreglo.length);
console.log(numeros.length);
console.log(str.length);
 
 
//obtener un elemento
let numero=numeros[2];
console.log(numero);
 
//agregar un valor sustituido por el nuevo valor
numero=500;
numeros[0]=numero;
console.log(numeros);
 
//agregar un elemento al final
numeros[numeros.length]=numero;
console.log(numeros);
 
//agregar un elemento mediante el metodo blando se agrega al final
numeros.push(-100);
console.log(numeros);
 
//recuperar un elemento
let posicion=numeros.lastIndexOf(500); //algoritmo de busqueda y devuelve la primera ocurrencia
//lastOf algoritmo de busqueda y devuelve la ultima ocurrencia
 
if(posicion>=0){
    console.log(`numero= ${numeros[posicion]}`);
 
}else{
    console.log(`Este numero no existe`);
}
 
console.log(numero);
 
//imprimir en forna vertical
 
posicion=0;
while(posicion < numeros.length){
 
    console.log(numeros[posicion]);
    posicion++
}
 
//iterar un arreglo con ECMAScript
for(const numero of numeros){
    console.log(`--> ${numero}`);
}
 
numeros.forEach( (numero)=>{
    console.log(`: ${numero}`);
});
 
let msg = "";
numeros.forEach( (numero)=> {
    msg+=`${numero}\t`;
});
console.log(msg);