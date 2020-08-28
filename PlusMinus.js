'use strict';

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positive = 0, negative = 0, zero = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    let size = arr.length;
    console.log(positive/size);
    console.log(negative/size);
    console.log(zero/size);
}

function main() {

    const arr = [-4, 3, -9, 0, 4, 1];
    plusMinus(arr);
}
main();