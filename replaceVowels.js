//str = "origin" 
//cambiar las vocales por el numero 1  
//output => 1r1g1n 

let str = "origin";

let vocales = ['a', 'e', 'i', 'o', 'u']

for(let i = 0; i < vocales.length; i++){
    str = str.replaceAll(vocales[i], '1');
}

console.log(str)