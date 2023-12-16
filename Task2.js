class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    if (head === null || head.next === null) {
        //якщо список порожній або має один елемент, повертаємо його
        return head;
    }

    // Змінюємо місцями два сусідні вузли
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;

    return newHead;
}

//функція для виводу списку
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val.toString() + " ");
        current = current.next;
    }
    console.log();
}

//використання
const example1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const example2 = null;
const example3 = new ListNode(1);

console.log("Input 1: ");
printList(example1);
console.log("Output 1: ");
printList(swapPairs(example1));

console.log("Input 2: ");
printList(example2);
console.log("Output 2: ");
printList(swapPairs(example2));

console.log("Input 3: ");
printList(example3);
console.log("Output 3: ");
printList(swapPairs(example3));
