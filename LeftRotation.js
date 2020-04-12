function rotLeft(a, r) {
    const n = a.length;
    const array = [];
    for (let i = 0; i < n; i++){
      if (i < n - r) {
        array[i] = a[r + i];
      } else {
        //move the left r elements to the right side
        array[i] = a[i - (n - r)]; 
      }
      //the index i should subtract n-r because the right n-r elements have been moved
    }
    return array;
}

function main() {
    const array = [1, 2, 3, 4, 5];
    const rotation = 2;
    const result = rotLeft(array, rotation);
    console.table(result);
}

main();