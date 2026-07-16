class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while(l <= r){
            let k = Math.floor((l+r)/2);
            let totalTime = 0;
            for(const pile of piles){
                totalTime += Math.ceil(pile/k);
            }
            if(totalTime <= h){
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res
    }
}
