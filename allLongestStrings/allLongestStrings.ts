function allLongestStrings(inputArray: string[]): string[] {
    let max:number = 0;
    for(let item of  inputArray){
        max = Math.max(item.length,max);
    }
    let ret:string[] = [];
    for(let item of inputArray){
        if(item.length == max){
            ret.push(item);
        }
    }
    return ret;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));