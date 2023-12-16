class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseKGroup(head, k) {
    if (!head || k === 1) {
      return head;
    }
  
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;
    let nextGroupStart = dummy.next;
  
    while (true) {
      let count = 0;
      let groupEnd = nextGroupStart;
  
      while (groupEnd && count < k) {
        groupEnd = groupEnd.next;
        count++;
      }
  
      if (count === k) {
        let prev = null;
        let current = nextGroupStart;
        let next = null;
  
        for (let i = 0; i < k; i++) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
  
        curr.next = prev;
        nextGroupStart.next = current;
        curr = nextGroupStart;
        nextGroupStart = current;
      } else {
        break;
      }
    }
  
    return dummy.next;
  }
  
  // Приклад 1
  const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  const k1 = 2;
  let result1 = reverseKGroup(head1, k1);
  let output1 = [];
  while (result1) {
    output1.push(result1.val);
    result1 = result1.next;
  }
  console.log(output1); // Виведе: [ 2, 1, 4, 3, 5 ]
  
  // Приклад 2
  const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  const k2 = 3;
  let result2 = reverseKGroup(head2, k2);
  let output2 = [];
  while (result2) {
    output2.push(result2.val);
    result2 = result2.next;
  }
  console.log(output2); // Виведе: [ 3, 2, 1, 4, 5 ]
  