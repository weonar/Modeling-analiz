class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function inorderTraversal(root) {
    const result = [];
    const stack = [];
  
    let current = root;
  
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
  
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  
    return result;
  }
  
  // Приклад 1
  const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
  console.log(inorderTraversal(root1)); // Виведе: [1, 3, 2]
  
  // Приклад 2
  const root2 = null;
  console.log(inorderTraversal(root2)); // Виведе: []
  
  // Приклад 3
  const root3 = new TreeNode(1);
  console.log(inorderTraversal(root3)); // Виведе: [1]
  