var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j <= n; j++) {
            if (allUnique(s, i, j)) ans = Math.max(ans, j - i )
        }
    }
    return ans
}

function allUnique(s, start, end) {
    let set = new Set()
    for (let k = start; k < end; k++) {
        let char = s.charAt(k)
        if (set.has(char)) {
            return false
        }
        set.add(char)
    }
    return true
}

console.log(lengthOfLongestSubstring("pwwkew"))
