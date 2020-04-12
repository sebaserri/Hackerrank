function birthdayCakeCandles(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    let result = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === max) {
            result++;
        }
    }
    return result;
}

function main() {
    let arr = [3, 2, 1, 3];
    const result = birthdayCakeCandles(arr);
    console.log(result);
}
main();
