//una función acepta un parámetro, con los valores desde 1 hasta 5 si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 al 10, teniendo en cuenta el limite es 10 posibles salidas esperadas: 
//output => 1...10 
//output => 2...10 
//output => 3...10 
//output => 4...10 
//output => 5...10 

let num = 5;
let lista = ''

while(num <= 10){
    lista += `${num}\n`;
    num++;
}

console.log(lista)