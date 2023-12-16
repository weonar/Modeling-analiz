class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reorderList(head) {
    if (!head || !head.next) {
      return head;
    }
  

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  

    let secondHalf = slow.next;
    slow.next = null;
  

    let prev = null;
    let current = secondHalf;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
  

    let first = head;
    let second = prev;
    while (second) {
      let nextFirst = first.next;
      first.next = second;
      first = second;
      second = nextFirst;
    }
  
    return head;
  }
  
  // Приклад використання:
  const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
  reorderList(head1);
  
  let current = head1;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  // Виведе: 1 4 2 3
  