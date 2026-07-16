class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = Array.from({length: temperatures.length}).fill(0);
        for (let i = 0; i < temperatures.length; i++){
            let cur = temperatures[i];
            while(stack.length && cur > stack[stack.length - 1][0]){
                const [temp, index] = stack.pop();
                res[index] = i - index;      
            }
            stack.push([cur,i]);
        }
        console.log(res)
        return res
    }
}
