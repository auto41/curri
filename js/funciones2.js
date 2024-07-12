//funciones2.js
 
//funcion anonima
 
let raiz =function(numero){
    return Math.sqrt(numero);
}
 
console.log(`raiz cuadrada : ${raiz(25)}`);
 
//funcion anonima y flecha
 
let potencia =(base,exp)=> Math.pow(base,exp);
 
console.log(`potencia= ${potencia(2,4)}`);
 
let serie= (numero)=>{
    let suma=0;
    for(let i=1; i<=numero; i++){
        suma+=i;
    }
    return suma;
}