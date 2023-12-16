class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function deleteDuplicates(head) {
    let current = head;
  
    while (current !== null && current.next !== null) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
  }
  
  // Функція для конвертації списку в масив
  function listToArray(head) {
    const result = [];
    let current = head;
  
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Приклад 1
  const list1 = new ListNode(1, new ListNode(1, new ListNode(2)));
  const result1 = deleteDuplicates(list1);
  console.log(listToArray(result1)); // Виведе: [1, 2]
  
  // Приклад 2
  const list2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
  const result2 = deleteDuplicates(list2);
  console.log(listToArray(result2)); // Виведе: [1, 2, 3]
  