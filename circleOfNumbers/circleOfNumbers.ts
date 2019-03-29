function circleOfNumbers(n:number, firstNumber: number): number {
    let ret = firstNumber + Math.floor(n/2);
    return ret == n ? 0 : ret;
}

function circleOfNumbers2(n: number, firstNumber: number): number {
    const numArray =[];
    const halfway = n /2;
    for(let i = 0; i < n; i++){
        numArray.push(i);
    }
    console.log(numArray);

    if(firstNumber < halfway){
        return numArray[firstNumber + halfway];
    }

    return numArray[firstNumber - halfway];
}


console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 5));