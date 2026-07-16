/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let len = 0;
    const map = new Set();

    for (let left = 0, right = 0; right < s.length; right++) {
        let cur = s[right];
        while (map.has(cur)) {
            let curEle = s[left];
            map.delete(curEle);
            left++;
        }
        map.add(cur, right);
        len = Math.max(len, right - left + 1);
    }
    return len;

};

/**
abcabcbb
left right len hmap
 0     0    0    {}
 0     1    0    { a => 0}
 0.    2    1    { a => 0, b => 0}
 0.    3    2    { a => 0, b => 1, c => 2}
 1.    4    3    { a => 3, b => 1, c => 2}
 2.    5    3    { a => 3, b => 4, c => 2}
 3.    6    3    { a => 3, b => 4, c => 5}
 4.    7    3    { a => 3, b => 6, c => 5}
 5.    8    3    { a => 3, b => 7, c => 5}

 */