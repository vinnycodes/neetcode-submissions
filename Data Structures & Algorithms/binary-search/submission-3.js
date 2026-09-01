class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0;
        let hi = nums.length - 1;

        while (lo <= hi) {
            let pivot = Math.floor((lo + hi) / 2);

            if (nums[pivot] === target) {
                return pivot
            }

            else if (nums[pivot] < target) {
                lo = pivot + 1;
            }

            else {
                hi = pivot - 1;
            }
        }
        return -1
    }
}
