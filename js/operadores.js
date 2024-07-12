let x= 5, y = 3;
console.log(`Suma = ${x+y}`);  //8
console.log(`Suma = ${x-y}`);  //2
console.log(`Suma = ${x*y}`);  //15
console.log(`Suma = ${x/y}`);  //1.6666
console.log(`Suma = ${x%y}`); // 2
 
let w = 2;
//operadores de asignacion
w+=2; // w = w + 2
console.log(w);   // 4
 
w-=2;  // w = w - 2
console.log(w); //2
 
w*=2;  // w = w * 2
console.log(w); // 4
 
w/=2;   // w = w / 2
console.log(w); // 2
 
w%=2;  // w = w % 2
 console.log(w); //0
 
//division entre enteros
//let xx = 5, yy = 3;
let xx = 16, yy = 6 ;
console.log("*********");
 
 
console.log(Math.trunc(xx/yy)); // para truncar la division y dejar solo el entero
console.log(Math.round(xx/yy)); // Sirve para redondear el resultado decimal
 
//division real
console.log(xx/yy);
 
//incrementos
w= 2;
w++;  // w=  w +1
console.log("*********");  
console.log(w); // imprime 3
 
++w;
console.log("*********");
console.log(w); // imprime 4
 
w= w++;
console.log(w);
 
w = ++w;
console.log(w);
 
w= 2;
w = (w++) + (++w) + (w++);
     //2       4      4  
console.log(w);