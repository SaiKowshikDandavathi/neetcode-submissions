class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p,i) => [p,speed[i]]);
        pairs.sort((a,b) => b[0] - a[0]);
        const stack = [];
        for(const [p ,s] of pairs){
            stack.push((target - p)/s);
            console.log(stack)
            while(stack.length >= 2 
                && stack[stack.length - 1] <= stack[stack.length -2]){
                stack.pop();
            }
        }
        console.log("After",stack)
        return stack.length
    }
}