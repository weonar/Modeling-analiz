function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function isSameTree(p, q) {
    // Обидва вузли є null = однакові
    if (!p && !q) {
        return true;
    }
    
    // Один з вузлів є null
    if (!p || !q) {
        return false;
    }
    
    // Порівняння значень кореневих вузлів і рекурсивне порівняння піддерев
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

//використання:
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1, tree2)); // Виведе true

const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);

const tree4 = new TreeNode(1);
tree4.right = new TreeNode(2);

console.log(isSameTree(tree3, tree4)); // Виведе false

const tree5 = new TreeNode(1);
tree5.left = new TreeNode(2);
tree5.right = new TreeNode(1);

const tree6 = new TreeNode(1);
tree6.left = new TreeNode(1);
tree6.right = new TreeNode(2);

console.log(isSameTree(tree5, tree6)); // Виведе false
