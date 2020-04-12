function timeConversion(s) {
    let array = s.split(':');
    
    if (s.indexOf('PM') > -1) {
        let h = Number(s.substr(0, 2));
        if (array[0] !== '12') {
            array[0] = String(h + 12);
        }
    } else {
        if (array[0] === '12') {
            array[0] = '00';
        }
    }
    array[2] = array[2].substr(0, 2);
    return array.join(':');
}

function main() {
    let s = "12:05:45AM";
    const result = timeConversion(s);
    console.log(result);
}
main();
