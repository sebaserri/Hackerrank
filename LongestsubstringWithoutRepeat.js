const lengthOfLongestSubstring = (s) => {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if (!(s[i] in hash)) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
}

const m = () => {
    let s = "abcabcbb";
    const result = lengthOfLongestSubstring(s);
    console.log(result);
}

m();
