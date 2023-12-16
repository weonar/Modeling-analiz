class FirstUnique {
    constructor() {
      this.queue = [];
      this.freqMap = new Map();
    }
  
    add(char) {
      this.queue.push(char);
      this.freqMap.set(char, (this.freqMap.get(char) || 0) + 1);
    }
  
    firstUnique() {
      for (let char of this.queue) {
        if (this.freqMap.get(char) === 1) {
          return this.queue.indexOf(char);
        }
      }
  
      return -1;
    }
  }
  
  // Приклад 1
  const firstUnique1 = new FirstUnique();
  firstUnique1.add("l");
  firstUnique1.add("e");
  firstUnique1.add("o");
  firstUnique1.add("p");
  firstUnique1.add("a");
  firstUnique1.add("r");
  firstUnique1.add("d");
  console.log(firstUnique1.firstUnique()); // Виведе: 0
  
  // Приклад 2
  const firstUnique2 = new FirstUnique();
  firstUnique2.add("l");
  firstUnique2.add("o");
  firstUnique2.add("v");
  firstUnique2.add("e");
  firstUnique2.add("l");
  firstUnique2.add("e");
  firstUnique2.add("o");
  firstUnique2.add("p");
  firstUnique2.add("a");
  firstUnique2.add("r");
  firstUnique2.add("d");
  console.log(firstUnique2.firstUnique()); // Виведе: 2
  
  // Приклад 3
  const firstUnique3 = new FirstUnique();
  firstUnique3.add("a");
  firstUnique3.add("a");
  firstUnique3.add("b");
  firstUnique3.add("b");
  console.log(firstUnique3.firstUnique()); // Виведе: -1
  