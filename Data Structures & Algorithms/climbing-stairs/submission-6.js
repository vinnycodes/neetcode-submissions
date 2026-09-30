class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};

        const dfs = (n) => {
            if (n <= 3) {
                return n;
            }

            if (memo[n]) {
                return memo[n];
            }

            memo[n] = dfs(n - 2) + dfs(n - 1);
            return memo[n];
        };

        return dfs(n);
    }
}
