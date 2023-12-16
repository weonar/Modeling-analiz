class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function hasCycle(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; // Знайдено цикл
      }
    }
  
    return false; // Немає циклу
  }
  
  // Приклад 1
  const list1 = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
  list1.next.next.next.next = list1.next; // Створюємо цикл
  console.log(hasCycle(list1)); // Виведе: true
  
  // Приклад 2
  const list2 = new ListNode(1, new ListNode(2));
  list2.next.next = list2; // Створюємо цикл
  console.log(hasCycle(list2)); // Виведе: true
  
  // Приклад 3
  const list3 = new ListNode(1);
  console.log(hasCycle(list3)); // Виведе: false
  