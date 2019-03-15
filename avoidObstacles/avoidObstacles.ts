function avoidObstacles2(inputArray: number[]): number 
{
    inputArray = inputArray.sort((a,b) => a-b);
    console.log(inputArray);
    let m = Math.max(...inputArray);
    console.log(m);
    let i = 1;
    for(; i <= m; i++)
    {
        let ans:number = i;
        if(inputArray[0] != i)
        {
            for (let j = 1; j < inputArray.length; j++)
            {
                if(inputArray[j] % i == 0)
                {
                    ans = -1;
                    break;
                }
            }
            if(ans !== -1)
            {
                return ans;
            }
        }
    }
    
    return m+1;
}
function avoidObstacles(inputArray: number[]): number 
{
    inputArray  = inputArray.sort((a,b) => a-b);
    const largestArrayVal = inputArray[inputArray.length -1];
    
    for(let i = 1; i <= largestArrayVal + 1; i++){
        if(inputArray.every((element) => element % i !== 0)){
            return i;
        }
    }
    
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));