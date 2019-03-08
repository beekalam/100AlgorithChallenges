function arrayChange(inputArray: number[]): number {
    let cnt:number = 0;
    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i] <= inputArray[i-1]){
            let diff:number = inputArray[i-1] - inputArray[i] + 1;
            inputArray[i] += diff;
            cnt += diff;
        }
    }
    return cnt;
}

console.log(arrayChange([1, 1, 1]));