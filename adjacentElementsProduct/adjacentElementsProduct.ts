function adjacentElementsProduct(inputArray: number[]): number {
    let maxProduct:number = 0;
    for(let i = 1; i < inputArray.length; i++){
        maxProduct = Math.max(maxProduct, inputArray[i] * inputArray[i-1]);
    }
    return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));