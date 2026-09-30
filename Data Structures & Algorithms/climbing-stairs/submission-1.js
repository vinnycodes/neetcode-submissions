class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};

        const count = (s) => {
            if (s <= 3) {
                return s;
            }

            if (memo[s]) {
                return memo[s];
            }

            memo[s] = count(s - 2) + count(s - 1);
            return memo[s];
        };

        return count(n);
    }
}