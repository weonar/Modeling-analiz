class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {

    const dummy = new ListNode();
    let current = dummy;
  

    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {

        current.next = list1;
        list1 = list1.next;
      } else {

        current.next = list2;
        list2 = list2.next;
      }
      current = current.next; 
    }
  
    if (list1 !== null) {
      current.next = list1;
    }
  
    if (list2 !== null) {
      current.next = list2;
    }
  
    return dummy.next;
  }
  
  //використання:
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  
  const mergedList = mergeTwoLists(list1, list2);
  
  let current = mergedList;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  // Виведе: 1 1 2 3 4 4
  