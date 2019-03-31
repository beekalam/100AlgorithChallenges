function compareIntegers(a: string, b: string): string {
    let aa = parseInt(a);
    let bb = parseInt(b);
    if(aa < bb){
        return 'less';
    }else if(aa > bb){
        return 'greater';
    }

    return 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));