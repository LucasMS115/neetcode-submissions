class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        const currentMin = this.minStack.length ? this.minStack.at(-1) : Infinity;

        if (val <= currentMin) this.minStack.push(val);
        else this.minStack.push(currentMin);
        
        this.stack.push(val);
    }

    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    top() {
        return this.stack.at(-1);
    }

    getMin() {
        return this.minStack.at(-1);
    }
}
