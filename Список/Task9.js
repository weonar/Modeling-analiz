class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function partition(head, x) {
    if (!head || !head.next) {
      return head;
    }
  
    let lessHead = new ListNode(0);
    let lessCurrent = lessHead;
    let greaterHead = new ListNode(0);
    let greaterCurrent = greaterHead;
  
    let current = head;
  
    while (current) {
      if (current.val < x) {
        lessCurrent.next = current;
        lessCurrent = lessCurrent.next;
      } else {
        greaterCurrent.next = current;
        greaterCurrent = greaterCurrent.next;
      }
  
      current = current.next;
    }
  
    
    lessCurrent.next = greaterHead.next;
    greaterCurrent.next = null;
  
    return lessHead.next;
  }
  
  // Приклад 1
  const head1 = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
  const x1 = 3;
  let result1 = partition(head1, x1);
  let output1 = [];
  while (result1) {
    output1.push(result1.val);
    result1 = result1.next;
  }
  console.log(output1); // Виведе: [ 1, 2, 2, 4, 3, 5 ]
  
  // Приклад 2
  const head2 = new ListNode(2, new ListNode(1));
  const x2 = 2;
  let result2 = partition(head2, x2);
  let output2 = [];
  while (result2) {
    output2.push(result2.val);
    result2 = result2.next;
  }
  console.log(output2); // Виведе: [ 1, 2 ]
  