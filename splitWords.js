//str = "hola mundo desde javascript" 
//pasar un string en array, indicar los espacios en blanco por "-"  
//output => ["hola", "mundo", "-", "desde", "-", "javascript"] 

let str = "hola mundo desde javascript";

str = str.replaceAll(' ', '-').split(/(-)/);
console.log(str)