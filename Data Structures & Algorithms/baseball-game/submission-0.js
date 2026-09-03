class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const score = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                // Need to make sure this is guarded
                score.push(score[score.length - 1] + score[score.length - 2]);
            } else if (operations[i] === "D") {
                score.push(score[score.length - 1] * 2);
            } else if (operations[i] === "C") {
                score.pop();
            } else {
                score.push(Number(operations[i]));
            }
        }

        return score.reduce((a, b) => a + b, 0);
    }
}
