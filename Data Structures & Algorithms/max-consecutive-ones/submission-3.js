class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                let j = ++i;
                let currMax = 1;
                while (nums[j] === 1) {
                    currMax++;
                    j++;
                }

                max = Math.max(max, currMax);
            }
        }

        return max;
    }
}
