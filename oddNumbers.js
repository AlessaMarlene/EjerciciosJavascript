//arr = [1,3,4,2,6,7,9,1,8] 
//indicar el total de elementos impares 
//output => 5 

let arr = [1,3,4,2,6,7,9,1,8];

arr = arr.reduce((acc, item) => {
    if(item % 2 != 0)
        acc++;

    return acc;
}, [])

console.log(arr)