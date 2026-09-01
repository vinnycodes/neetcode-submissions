class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            let count = 0;

            for (let j = i; j < nums.length; j++) {
                if (nums[j] === 0) break;
                count++
            }

            max = Math.max(max, count);
        }

        return max
    }
}
