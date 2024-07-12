let tabla = document.querySelector("#tabla");  
 
tabla.innerHTML = "Diseño de una tabla";
//declaración e inicialización de un arreglo
let nombres = ["luisa", "pedro", "ana maria", "elizabeth fernanda", "jose"];
 
let imprimir  = (nombres) => { //devolvera los nombres
    let msg = "<table class = 'table table-bordered' >";  /* cuando ya se usan comillas dobles 
    se puede ocupar apostrofe*/
    msg+="<thead><tr><th>No</th><th>Nombre(s)</th><th>Vocales</th>";
    msg+="<th>Invertir</th><th>Codificar</th><th>Palindromo</th></tr></thead>";
    let i = 0;
    msg+="<tbody>";
    while(i< nombres.length){
        msg+="<tr>";
        msg+=`<td>${i+1}</td>`;
        msg+=`<td>${nombres[i]}</td>`;
        msg+=`<td>${vocales(nombres[i])}</td>`;
        msg+=`<td>${invertir(nombres[i])}</td>`;
        msg+=`<td>${codificar(nombres[i])}</td>`;
        msg+=`<td>${palindromo(nombres[i])}</td>`;
        msg+="</tr>";
        i++;
    }
    msg+="</tbody></table>";
    return msg;
}            
 
 
let vocales = (nombre) =>{
    nombre = nombre.toLowerCase(); //para cambiar a minuscula
    let w = 0, vocal = 0; //controla la posicion
    let car = '\0';// caracter espacio
    while(w < nombre.length){
        car = nombre.charAt(w); //obtenemos un caracter
        switch(car){
            case 'a' : vocal++; break;
            case 'e' : vocal++; break;
            case 'i' : vocal++; break;
            case 'o' : vocal++; break;
            case 'u' : vocal++; break;
           
        }
        ++w;
    }
    return vocal;
}
 
//let invertirCadena = (nombre) =>{
    //let nuevaCadena = "";
    //for(let i = nombre.length-1; i>=0;i--){
      //  nuevaCadena+=nombre[i];
    //}
    //return nuevaCadena;
//}
let invertir = (nombre) =>{
    let w= nombre.length-1;
    let inv="";
    let car ='\0';
    while(w>=0){
        car = nombre.charAt(w);
        inv+=car;
        --w;
    }
    return inv;
}
 
let codificar = (nombre) =>{
    nombre = nombre.toLowerCase();
    let msg="";
    let car = '\0';
    let w = 0;
 
    while(w< nombre.length){
        car = nombre.charAt(w);
        if(car === 'a'|| car === 'e' || car === 'i' || car === 'o' || car === 'u'){
            msg+='*';
        }else{
            msg+=car;
        }
        w++;
    }
    return msg;
}  // Estos son metodos duros
 
let palindromo = (nombre) => {
    nombre = nombre.toLowerCase();
    let nombreInvertido = invertir(nombre);
    if (nombre === nombreInvertido) {
        return 'si';
    }else{
        return 'no';
        }
    }
 
tabla.innerHTML = imprimir(nombres);