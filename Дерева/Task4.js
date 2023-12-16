class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function kthSmallest(root, k) {
    const result = [];

    function inOrderTraversal(node) {
        if (node) {
            inOrderTraversal(node.left);
            result.push(node.val);
            inOrderTraversal(node.right);
        }
    }

    inOrderTraversal(root);

    return result[k - 1];
}

//використання:
const tree1 = new TreeNode(3);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(4);
tree1.left.right = new TreeNode(2);

console.log(kthSmallest(tree1, 1)); // Виведе 1

const tree2 = new TreeNode(5);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(6);
tree2.left.left = new TreeNode(2);
tree2.left.right = new TreeNode(4);
tree2.left.left.left = new TreeNode(1);

console.log(kthSmallest(tree2, 3)); // Виведе 3
