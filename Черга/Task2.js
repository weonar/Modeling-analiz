class MyStack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(x) {
      this.queue2.push(x);
  
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
  
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  
    pop() {
      return this.queue1.shift();
    }
  
    top() {
      return this.queue1[0];
    }
  
    empty() {
      return this.queue1.length === 0;
    }
  }
  
  // Приклад
  const myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  console.log(myStack.top()); // Виведе: 2
  console.log(myStack.pop()); // Виведе: 2
  console.log(myStack.empty()); // Виведе: false
  