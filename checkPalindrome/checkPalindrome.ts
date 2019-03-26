function checkPalindrome(inputString: string): boolean {
    let rev = inputString.toLocaleLowerCase().split('').reverse().join('');
    return rev == inputString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
