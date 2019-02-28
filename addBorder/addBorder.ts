function addBorder(picture: string[]): string[] {
    let line = "*".repeat(picture[0].length + 2);
    let ret:string[] = [];
    ret.push(line);
    picture.forEach((v) => ret.push("*" + v + "*") );
    ret.push(line);
    return ret;
    
}

console.log(addBorder(["abc", "ded"]));