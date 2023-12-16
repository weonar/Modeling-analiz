class RecentCounter {
    constructor() {
      this.requests = [];
    }
  
    ping(t) {
      this.requests.push(t);
      
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
      
      return this.requests.length;
    }
  }
  
  // Приклад
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1)); // Виведе: 1
  console.log(recentCounter.ping(100)); // Виведе: 2
  console.log(recentCounter.ping(3001)); // Виведе: 3
  console.log(recentCounter.ping(3002)); // Виведе: 3
  