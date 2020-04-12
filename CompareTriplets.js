'use strict';

function compareTriplets(a, b) {
    let alice = 0, bob = 0;
	for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    const result = [alice, bob];
    return result;
}

function main() {
    const a = [10, 2, 6];

    const b = [1, 24, 60];

    let result = compareTriplets(a, b);

    console.log(result);
}
main();