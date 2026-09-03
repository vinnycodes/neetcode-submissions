class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let str in s) {
            let char = s[str];
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                let prev = stack[stack.length - 1];

                if (
                    (prev === "(" && char === ")") ||
                    (prev === "{" && char === "}") ||
                    (prev === "[" && char === "]")
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
