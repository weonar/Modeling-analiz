class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function invertTree(root) {
    if (!root) {
        return null; // Порожнє дерево
    }

    // Обміняти ліве і праве піддерева
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Рекурсивно інвертувати ліве і праве піддерева
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// Функція для отримання дерева у вигляді масиву
function treeToArray(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current) {
            result.push(current.val);
            queue.push(current.left, current.right);
        } else {
            result.push(null);
        }
    }

    while (result.length > 0 && (result[result.length - 1] === null || result[result.length - 1] === undefined)) {
        result.pop();
    }

    return result;
}

//використання:
const tree1 = new TreeNode(4);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(7);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(9);

const invertedTree1 = invertTree(tree1);
console.log(treeToArray(invertedTree1)); // Виведе [4, 7, 2, 9, 6, 3, 1]

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);

const invertedTree2 = invertTree(tree2);
console.log(treeToArray(invertedTree2)); // Виведе [2, 3, 1]

const tree3 = null;

const invertedTree3 = invertTree(tree3);
console.log(treeToArray(invertedTree3)); // Виведе []
