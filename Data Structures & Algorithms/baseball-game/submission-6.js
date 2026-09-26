class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const total = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                total.push(total[total.length - 1] + total[total.length - 2]);
            } else if (operations[i] === "D") {
                total.push(total[total.length - 1] * 2);
            } else if (operations[i] === "C") {
                total.pop();
            } else {
                total.push(Number(operations[i]));
            }
        }

        return total.reduce((a, b) => Number(a) + Number(b), 0);
    }
}
