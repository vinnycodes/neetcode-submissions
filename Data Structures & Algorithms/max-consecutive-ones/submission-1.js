class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let max = 0

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1){
                let currMax = 1;
                let j = i+1;

                while(nums[j] && nums[j] === 1) {
                    currMax++
                    j++ 
                }

                if(currMax > max){
                    max = Math.max(max,currMax)
                }
            }
        }

        return max
    }
}
