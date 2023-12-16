class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    current.next = l1 || l2;
  
    return dummy.next;
  }
  
  function mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }
  

    while (lists.length > 1) {
      let mergedLists = [];
  
      for (let i = 0; i < lists.length; i += 2) {
        let l1 = lists[i];
        let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
        let merged = mergeTwoLists(l1, l2);
        mergedLists.push(merged);
      }
  
      lists = mergedLists;
    }
  
    return lists[0];
  }
  
  //використання:
  const lists1 = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
  ];
  
  const result1 = mergeKLists(lists1);
  

  let current1 = result1;
  while (current1 !== null) {
    console.log(current1.val);
    current1 = current1.next;
  }
  // Виведе: 1 1 2 3 4 4 5 6
  
  const lists2 = [];
  const result2 = mergeKLists(lists2);
  

  let current2 = result2;
  while (current2 !== null) {
    console.log(current2.val);
    current2 = current2.next;
  }

  