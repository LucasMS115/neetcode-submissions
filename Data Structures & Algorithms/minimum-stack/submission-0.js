class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        
        const currentMin = this.minStack.at(-1);
        
        if (!(typeof currentMin === "number") || val <= currentMin) {
            this.minStack.push(val);
        } else {
            this.minStack.push(currentMin);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack.at(-1);
    }

    getMin() {
        return this.minStack.at(-1);
    }
}
