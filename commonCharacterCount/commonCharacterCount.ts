function characterCount(s:string, c:string): number{
    let ret = 0;
    for(let i =0; i < s.length; i++){
        if(s[i] == c)  ret ++;
    }
    return ret;
}

function commonCharacterCount2(s1: string, s2: string): number {
    let alpha="abcdefghijklmnopqrstuvwxyz";
    alpha += alpha.toUpperCase();
    let res = 0;
    for(let i = 0;i < alpha.length; i++){
        res += Math.min(characterCount(s1,alpha[i]), characterCount(s2,alpha[i]) );
    }
    return res;
}
//---------------------------------------------------------------------
function commonCharacterCount(s1: string, s2:string): number{
    const s1Chars:string[] = s1.split('');
    const s2Chars:string[] = s2.split('');
    const s1CharCount = getCharsList(s1Chars);
    const s2CharCount = getCharsList(s2Chars);
    let total = 0;

    for(const prop in  s1CharCount){
        if(s2CharCount.hasOwnProperty(prop)){
            if(s2CharCount[prop] < s1CharCount[prop]){
                total += s2CharCount[prop];
            }else{
                total += s1CharCount[prop];
            }
        }
    }
    return total;
}

function getCharsList(chars: string[]):object{
    const wordCount = {};
    for(let i = 0; i < chars.length;i++){
        if(wordCount.hasOwnProperty(chars[i])){
            wordCount[chars[i]]++;
        }else{
            wordCount[chars[i]] = 1;
        }
    }

    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));