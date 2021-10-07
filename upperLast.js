//cadena = "javascript";  
//dada la anterior cadena colocar la ultima letra en mayúscula 
//output => javascripT 

let cadena = "javascript";

cadena = cadena.slice(0, cadena.length - 1) + cadena[cadena.length - 1].toUpperCase();
console.log(cadena)