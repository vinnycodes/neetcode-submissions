class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        let numsConcate = [];

        for (let i = 0; i < nums.length; i++) {
            numsConcate.push(nums[i])
        }

        for (let i = 0; i < nums.length; i++) {
            numsConcate.push(nums[i])
        }

        return numsConcate
    }
}
