/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canAliceWin = (nums) => {

    let singeDigitSum = 0
    let doubleDigitSum = 0

    for (let i = 0; i < nums.length; i++) {
        if(nums[i].toString().length === 1) {
            singeDigitSum += nums[i]
        }else{
            doubleDigitSum += nums[i]
        }
    }
    console.log(singeDigitSum, doubleDigitSum)
    return singeDigitSum != doubleDigitSum

};