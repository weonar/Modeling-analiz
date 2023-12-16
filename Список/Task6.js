class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
  
    return prev;
  }
  
  function doubleLinkedList(head) {
    let reversedHead = reverseLinkedList(head);
    let current = reversedHead;
    let carry = 0;
  
    while (current !== null) {
      let newVal = current.val * 2 + carry;
      current.val = newVal % 10;
      carry = Math.floor(newVal / 10);
  
      if (current.next === null && carry > 0) {
        current.next = new ListNode(carry);
        break;
      }
      current = current.next;
    }
  
    return reverseLinkedList(reversedHead);
  }
  
  //використання:
  const head1 = new ListNode(1, new ListNode(8, new ListNode(9)));
  const result1 = doubleLinkedList(head1);
  
  let current1 = result1;
  while (current1 !== null) {
    console.log(current1.val);
    current1 = current1.next;
  }
  // Виведе: 3 7 8
  
  const head2 = new ListNode(9, new ListNode(9, new ListNode(9)));
  const result2 = doubleLinkedList(head2);
  
  let current2 = result2;
  while (current2 !== null) {
    console.log(current2.val);
    current2 = current2.next;
  }
  // Виведе: 1 9 9 8
  