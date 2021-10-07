//str = "origin" 
//eliminar las vocales del string 
//output => rgn  

str = "origin";
let vocales = ['a', 'e', 'i', 'o', 'u']

for(let i = 0; i < vocales.length; i++){
    str = str.replaceAll(vocales[i], '');
}

console.log(str);