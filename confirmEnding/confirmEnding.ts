function confirmEnding2(str: string, target: string) {
   let lent = target.length;
   let lens = str.length;
   if(lent > lens){
       return false;
   }
    return str.substr(lens - lent) == target;   
}

function confirmEnding(str: string, target: string) {
    const start = str.length - target.length;

    return str.substr(start) == target;
 }

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));