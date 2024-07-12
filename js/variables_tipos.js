//alert("Hola Javascript"); //Son funciones no metodos, 
//requiere un argumento para que dentro de la ventana se muestre un mensaje
//
/*
    comentario multiple
*/
 
//declaracion de variables y sus tipos
//variables globales
 
var str;
str = 'Hola Mundo';
var str2 = "Lenguaje Javascript";    //Se puede poner entre comillas
var str3;
var str3='Nuevo valor';
 
console.log(str);
console.log(str2);
console.log(str3);
 
str = 23;
str = 123.343;
str = true;
 
console.log(str);
 
function miFunction(){ // Declaracion de un metodo  ambito= si es variable global o local
    //variable local
    var str = 'Suma';
    console.log(str);
}    
 
miFunction(); // invocacion de la funcion
 
 
//concatenación
console.log(str2);
console.log("Valor Actual : ", str2);  
 
//ECMAScript
//concatenar usando interpolación
 
console.log(`Valor actual :${str2}` );  
 
//nueva forma de declarar variables
 
let x = 34;   //se utiliza para declarar
console.log(`x= ${x}` );