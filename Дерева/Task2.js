function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function isSymmetric(root) {
    if (!root) {
        return true; // Порожнє дерево є симетричним
    }

    function isMirror(left, right) {
        if (!left && !right) {
            return true; // Обидва вузли є null = симетричні
        }

        if (!left || !right) {
            return false; // Один з вузлів є null
        }

        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
}

//використання:
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);

console.log(isSymmetric(tree1)); // Виведе true

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.right = new TreeNode(3);
tree2.right.right = new TreeNode(3);

console.log(isSymmetric(tree2)); // Виведе false

const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(1);

console.log(isSymmetric(tree3)); // Виведе false
