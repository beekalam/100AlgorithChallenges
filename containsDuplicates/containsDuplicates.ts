function containsDuplicates(a: number[]): boolean {
    return  (new Set(a)).size == a.length;
}

function containsDuplicates2(a: number[]): boolean {
    a.sort( (x,y) =>{
        return x - y;
    });
    for(let i = 1; i < a.length; i++){
        if(a[i] == a[i-1]){
            return false;
        }
    }

    return true;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
