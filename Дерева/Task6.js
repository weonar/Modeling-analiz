class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function maxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    function maxSumThroughNode(node) {
        if (!node) {
            return 0;
        }

        // Рекурсивно обчислюємо максимальну суму для лівого та правого піддерева
        const leftMax = Math.max(0, maxSumThroughNode(node.left));
        const rightMax = Math.max(0, maxSumThroughNode(node.right));

        // Оновлюємо максимальну суму шляху, який проходить через поточний вузол
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

        // Повертаємо максимальну суму шляху для обраного вузла
        return node.val + Math.max(leftMax, rightMax);
    }

    // Викликаємо рекурсивну функцію для кореневого вузла
    maxSumThroughNode(root);

    return maxSum;
}

// Приклад 1
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

console.log(maxPathSum(tree1)); // Виведе 6

// Приклад 2
const tree2 = new TreeNode(-10);
tree2.left = new TreeNode(9);
tree2.right = new TreeNode(20);
tree2.right.left = new TreeNode(15);
tree2.right.right = new TreeNode(7);

console.log(maxPathSum(tree2)); // Виведе 42
