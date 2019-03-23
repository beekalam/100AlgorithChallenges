function characterParity(symbol: string): string {
    let n = parseInt(symbol);
    console.log(n);
    if(isNaN(n)){
        return "not a digit"
    }
    return n % 2 == 0 ? 'even':'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
