function alphabetSubsequence(s: string): boolean {
    
    for(let i = 1;i < s.length; i++){
        if (s.charCodeAt(i) <= s.charCodeAt(i-1)) return false;
    }
    return true;
}

function alphabetSubsequence2(s: string): boolean {
    
    const chars:string[] = s.split('');
    const charValues:number[] = [];

    chars.forEach((char:string) =>{
        charValues.push(char.charCodeAt(0));
    });

    if(new Set(charValues).size !== charValues.length){
        return false;
    }

    for(let i = 0; i <charValues.length - 1; i++){
        if(charValues[i] >= charValues[i+1]){
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
