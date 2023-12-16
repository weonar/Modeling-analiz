class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function recoverFromPreorder(traversal) {
    const nodes = [];
    let i = 0;

    while (i < traversal.length) {
        let depth = 0;
        while (traversal[i] === '-') {
            depth++;
            i++;
        }

        let value = '';
        while (i < traversal.length && traversal[i] !== '-') {
            value += traversal[i];
            i++;
        }

        const node = new TreeNode(parseInt(value));
        node.depth = depth;
        nodes.push(node);
    }

    return buildTree(nodes);
}

function buildTree(nodes) {
    const stack = [];

    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let depth = node.depth;

        while (stack.length > depth) {
            stack.pop();
        }

        if (stack.length > 0) {
            let parent = stack[stack.length - 1];
            if (!parent.left) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
}

// Приклад 1
const traversal1 = "1-2--3--4-5--6--7";
console.log(JSON.stringify(recoverFromPreorder(traversal1), null, 2));
// Виведе [1,2,5,3,4,6,7]

// Приклад 2
const traversal2 = "1-2--3---4-5--6---7";
console.log(JSON.stringify(recoverFromPreorder(traversal2), null, 2));
// Виведе [1,2,5,3,null,6,null,4,null,7]

// Приклад 3
const traversal3 = "1-401--349---90--88";
console.log(JSON.stringify(recoverFromPreorder(traversal3), null, 2));
// Виведе [1,401,null,349,88,90]
