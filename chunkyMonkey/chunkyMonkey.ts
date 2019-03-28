function chunkyMonkey(arr: any[], size: number): any[][] {
    let i = 0; 
    let ret = [];
    for(; i < arr.length; i+=size){
        let a = [];
        for(let j = i; j < i+size && j < arr.length; j++){
            a.push(arr[j]);
        }
        ret.push(a);
    }
    return ret;
}
function chunkyMonkey2(arr: any[], size: number): any[][] {
    const nested = [];
    let count = 0;

    while(count < arr.length){
        nested.push(arr.slice(count, count+= size));
    }

    return nested;
}



console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey(["a", "b", "c", "d","e","f","g"], 2));
console.log(chunkyMonkey(["a", "b", "c", "d","e","f","g"], 10));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));