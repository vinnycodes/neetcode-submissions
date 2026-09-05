class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const curr = s[i];

            if (curr === "(" || curr === "{" || curr === "[") {
                stack.push(curr);
            } else {
                const prev = stack[stack.length - 1];

                if (!prev) return false;

                if (
                    (prev === "(" && curr === ")") ||
                    (prev === "{" && curr === "}") ||
                    (prev === "[" && curr === "]")
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0 ? true : false;
    }
}
