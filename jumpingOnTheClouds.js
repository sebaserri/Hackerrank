'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let noOfJumps = 0, i = 0;
		while(true) {
			if(i + 2 < c.length && c[i + 2] == 0) {
				i += 2;
			} else if(i + 1 < c.length) {
				i++;
			} else {
				break;
			}
			noOfJumps++;
		}

    return noOfJumps;
}

function main() {
    const n = 7;

    const c = [0, 0, 1, 0, 0, 1, 0];

    let result = jumpingOnClouds(c);

    console.log(result);
}
main();