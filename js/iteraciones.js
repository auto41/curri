//ciclo o iteraciones
 
for(let j =1; j <=5; j ++){
    console.log(` j = ${j}`)
}
 
for (let j= 2; j<= 10; j +=2)
    console.log(` j = ${j}`)
 
 
// Si son mas de dos instrucciones si se pueden omitir las llaves
 
for( let w= 10; w >=0; w-=2){
    console.log(w);
}
 
 
// Ahora con while
 
let z= 0;
while(z<=10){
    console.log(` z = ${z}`);
    z+=2;
}
 
// Con el post
let y= 0;
while(y++ <=5 ){
    console.log(` y -> ${y}`);
}
 
 
//ciclo do- while
let p = 1;
do{
    console.log(` p = ${p}`)
 
}while(p++ < 5);