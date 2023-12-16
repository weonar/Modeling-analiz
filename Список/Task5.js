class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function deleteNode(node) {
    if (node === null || node.next === null) {
      return; 
    }
  

    node.val = node.next.val;
  

    node.next = node.next.next;
  }
  
  //використання:
  const head = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9))));
  const nodeToDelete = head.next; 
  
  deleteNode(nodeToDelete);
  
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  // Виведе: 4 1 9
  