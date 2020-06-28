'use strict';

// Complete the jumpingOnClouds function below.
function repeatedString(s, n) {
    let as = s.split('').filter(i => i === "a").length;
    // @ts-ignore
    as = (parseInt(n / s.length, 0) * as) 
      + (s.slice(0, (n % s.length)).split('').filter(i => i === "a").length);    
    return as; 
}

function main() {
    const n = 10;

    const s = "aba";

    let result = repeatedString(s, n);

    console.log(result);
}
main();