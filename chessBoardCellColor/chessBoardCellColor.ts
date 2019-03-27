function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let s1 =  (cell1.charCodeAt(0) - 'A'.charCodeAt(0) + 1) + parseInt(cell1.charAt(1));
    let s2 = (cell2.charCodeAt(0) - 'A'.charCodeAt(0) + 1) + parseInt(cell2.charAt(1));
    return s1 % 2 == s2 % 2;
}

function chessBoardCellColor2(cell1: string, cell2: string): boolean {
    const board = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    };
    const total1 = board[cell1[0]] + parseInt(cell1[1]);
    const total2 = board[cell2[0]] + parseInt(cell2[1]);
    return total1 % 2 == total2 % 2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
