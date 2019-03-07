function areSimilar(a: number[], b: number[]): boolean {
    let cnt = 0;
    for(let i=0;i <a.length; i++){
        if(a[i] != b[i]) cnt++;
    }
    
    return cnt > 2 ? false:true;
}   

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
