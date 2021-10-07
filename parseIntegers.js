//arr = [10, "20", 30, "40", 50] 
//verificar cada elemento sea de  tipo number y sino lo es cambiar su tipo a number 
//output => [10, 20, 30, 40, 50] 

let arr = [10, "20", 30, "40", 50];

for(let i = 0; i < arr.length; i++){
    if(!(typeof arr[i] == "number"))
        arr[i] = parseInt(arr[i]);
}

console.log(arr)