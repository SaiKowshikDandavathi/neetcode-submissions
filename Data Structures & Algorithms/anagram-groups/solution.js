class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 0) return [[""]]
        let hashMap = new Map();

        for (let str of strs){
            let sortedValue =  str.split("").sort().join("");
            let value = hashMap.get(sortedValue) || [];
            value.push(str);
            hashMap.set(sortedValue, value);
        }
        return [...hashMap].map(ele => ele[1]);
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - The key `str.split("").sort().join("")` costs O(k log k) per
 *   string (k = string length), giving O(n * k log k) overall. The
 *   optimal approach uses a fixed-size character-count array as the
 *   key, which is O(n * k).
 * - `if(strs.length === 0) return [[""]]` is dead code under
 *   LeetCode's constraints (strs.length >= 1 always) and would be
 *   semantically wrong if ever hit — grouping zero strings should
 *   yield [], not [[""]].
 *
 * Areas of improvement:
 * - Build the key from per-character counts instead of sorting.
 * - Drop the unreachable/incorrect empty-input special case.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    groupAnagrams(strs) {
        const groups = new Map();

        for (const str of strs) {
            const counts = new Array(26).fill(0);
            for (const ch of str) {
                counts[ch.charCodeAt(0) - 97]++;
            }
            const key = counts.join(",");

            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(str);
        }

        return [...groups.values()];
    }
}
*/
