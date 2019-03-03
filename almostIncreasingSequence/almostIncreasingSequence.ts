function almostIncreasingSequence(sequence: number[]): boolean {
    let cnt:number = 0;
    for(let i = 1; i < sequence.length; i++){
        if(sequence[i] < sequence[i-1]){
            cnt++;
        }
    }
   return cnt <=  1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 