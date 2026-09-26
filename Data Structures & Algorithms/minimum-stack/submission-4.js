class MinStack {
    constructor() {
        this.Stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.Stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.Stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.Stack[this.Stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.Stack);
    }
}
