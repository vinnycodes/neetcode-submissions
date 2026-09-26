class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                let curr = 1;
                let j = ++i;
                while (nums[j] === 1) {
                    j++;
                    curr++;
                }

                max = Math.max(max, curr);
            }
        }

        return max;
    }
}
