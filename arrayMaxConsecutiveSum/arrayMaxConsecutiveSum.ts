
function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum =0;
    for(let i = 0; i < inputArray.length-k; i++){
        let tmp = 0;
        for(let j = i; j < i+k;j++){
            tmp += inputArray[j];
        }
        sum = Math.max(sum,tmp);
    }
    console.log(sum);
    return sum;
}

function arrayMaxConsecutiveSum2(inputArray: number[], k: number): number {
    let sum  = 0;
    let max = 0;
    for(let i = 0; i < k; i++){
        sum += inputArray[i];
    }

    max = sum;

    for(let i = k; i < inputArray.length; i++){
        sum -= inputArray[i-k];
        sum += inputArray[i];
        if(sum > max){
            max = sum;
        }
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum2([2, 3, 5, 1, 6], 2));