function palindrome1(str) {
  var let = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(let, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}


function palindrome2(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const result = palindrome2("A man, a plan, a canal. Panama");
console.log(result);