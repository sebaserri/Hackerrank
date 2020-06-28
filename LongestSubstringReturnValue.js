const getUniqueCharacterSubstring = (s) => {
  const visited = {};
  let output = '';
  let start = 0;
  const array = s.split('');
  for (let end = 0; end < array.length; end++) {
    const currChar = array[end];
    if (currChar in visited) {
      start = Math.max(visited[currChar] + 1, start);
    }
    if (output.length < end - start + 1) {
      output = s.substring(start, end + 1);
    }
    visited[currChar] = end;
  }
  return output;
}

// @ts-ignore
const m = () => {
 const result = getUniqueCharacterSubstring('abcabcbb');
 console.log(result);
}

m();
