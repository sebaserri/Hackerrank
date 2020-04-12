'use strict';

// Complete the staircase function below.
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let blanks = [ ...[], ...Array(n - i)].map(i => ' ');
        let hashes = [ ...[], ...Array(n - (n - i))].map(i => '#');
        console.log([...blanks, ...hashes].join(''));
    }
}

function main() {
    const n = 20;

    staircase(n);
}
main();