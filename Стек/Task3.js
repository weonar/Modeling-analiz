class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack[this.stack.length] = val;
  
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack[this.minStack.length] = val;
      }
    }
  
    pop() {
      if (this.stack.length === 0) return;
  
      const popped = this.stack[this.stack.length - 1];
      this.stack.length--;
  
      if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.length--;
      }
    }
  
    top() {
      if (this.stack.length === 0) return null;
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) return null;
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  //використання
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // Виведе: -3
  minStack.pop();
  console.log(minStack.top()); // Виведе: 0
  console.log(minStack.getMin()); // Виведе: -2
  