class Stack {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length <= 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack