'use strict';

function diagonalDifference(arr) {
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {   
            if (i === j) {
                sum1 += arr[i][j];
            }

            if (i === arr.length - j - 1) {
                sum2 += arr[i][j];
            }
        }
    }

    return Math.abs(sum1 - sum2);
}

function main() {
    
    const m = [[11, 2, 4],[4, 5, 6], [10, 8, -12]];

    let result = diagonalDifference(m);

    console.log(result);
}
main();