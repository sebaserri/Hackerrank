function miniMaxSum(arr) {
    let max = 0;
    let min = 1000000000;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        } 
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log((sum - max) + " " + (sum - min));
}

function main() {
    let arr = [1, 3, 5, 7, 9];
    miniMaxSum(arr);
}
main();
