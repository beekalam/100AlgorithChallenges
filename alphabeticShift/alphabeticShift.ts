function alphabeticShift(inputString: string): string {
    let input = inputString.split('');
    console.log(input);
    let ret = "";
    input.forEach((v:string) => {
        if(v == 'z') ret += 'a';
        else  ret += String.fromCharCode(v.charCodeAt(0)+1);
    });

    return ret;
}

console.log(alphabeticShift('crazy'));