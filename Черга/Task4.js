class MyCircularQueue {
    constructor(k) {
      this.capacity = k;
      this.queue = new Array(k).fill(null);
      this.front = 0;
      this.rear = -1;
      this.size = 0;
    }
  
    Front() {
      return this.size > 0 ? this.queue[this.front] : -1;
    }
  
    Rear() {
      return this.size > 0 ? this.queue[this.rear] : -1;
    }
  
    enQueue(value) {
      if (this.isFull()) {
        return false;
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = value;
      this.size++;
      return true;
    }
  
    deQueue() {
      if (this.isEmpty()) {
        return false;
      }
      this.front = (this.front + 1) % this.capacity;
      this.size--;
      return true;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  }
  
  // Приклад
  const circularQueue = new MyCircularQueue(3);
  console.log(circularQueue.enQueue(1)); // Виведе: true
  console.log(circularQueue.enQueue(2)); // Виведе: true
  console.log(circularQueue.enQueue(3)); // Виведе: true
  console.log(circularQueue.enQueue(4)); // Виведе: false
  console.log(circularQueue.Rear()); // Виведе: 3
  console.log(circularQueue.isFull()); // Виведе: true
  console.log(circularQueue.deQueue()); // Виведе: true
  console.log(circularQueue.enQueue(4)); // Виведе: true
  console.log(circularQueue.Rear()); // Виведе: 4
  