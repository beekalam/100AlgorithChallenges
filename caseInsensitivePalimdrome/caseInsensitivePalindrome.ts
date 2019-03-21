function isCaseInsensitivePalindrome(inputString: string): boolean {
    let revinput =  inputString.split("").reverse().join('').toLowerCase();
    return revinput == inputString.toLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));