//cadena = "bar"; 
//dada la anterior cadena colocar la letra del medio en mayúscula si es impar si es par no aplica 
//true  - output => bAr   
//false  - output => bar 

let cadena = "bar";

if(cadena.length % 2 != 0){
    let indexImpar = Math.floor(cadena.length / 2);
    cadena = cadena.slice(0, indexImpar) + cadena[indexImpar].toUpperCase() + cadena.slice(indexImpar + 1);
}

console.log(cadena)