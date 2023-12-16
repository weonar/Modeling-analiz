class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function verticalTraversal(root) {
    const result = [];
    const columns = new Map();

    function dfs(node, row, col) {
        if (!node) {
            return;
        }

        if (!columns.has(col)) {
            columns.set(col, []);
        }

        columns.get(col).push({ val: node.val, row });

        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }

    dfs(root, 0, 0);

    const sortedColumns = [...columns.keys()].sort((a, b) => a - b);

    for (const col of sortedColumns) {
        const columnNodes = columns.get(col).sort((a, b) => {
            if (a.row === b.row) {
                return a.val - b.val;
            }
            return a.row - b.row;
        });

        result.push(columnNodes.map(node => node.val));
    }

    return result;
}

// Приклад 1
const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

console.log(verticalTraversal(tree1)); // Виведе [[9], [3, 15], [20], [7]]

// Приклад 2
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);

console.log(verticalTraversal(tree2)); // Виведе [[4], [2], [1, 5, 6], [3], [7]]

// Приклад 3
const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.left.left = new TreeNode(4);
tree3.left.right = new TreeNode(6);
tree3.right.left = new TreeNode(5);
tree3.right.right = new TreeNode(7);

console.log(verticalTraversal(tree3)); // Виведе [[4], [2], [1, 5, 6], [3], [7]]
