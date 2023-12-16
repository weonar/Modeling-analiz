class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// Серіалізація
function serialize(root) {
    if (!root) {
        return "null";
    }

    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);

    return `${root.val},${leftSerialized},${rightSerialized}`;
}

// Десеріалізація
function deserialize(data) {
    const nodes = data.split(",");
    const queue = [...nodes];

    function buildTree() {
        const val = queue.shift();

        if (val === "null") {
            return null;
        }

        const node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();

        return node;
    }

    return buildTree();
}

// Приклад 1
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(5);

const serializedTree1 = serialize(tree1);
console.log(serializedTree1); // Виведе "1,2,null,null,3,4,null,null,5,null,null"

const deserializedTree1 = deserialize(serializedTree1);
console.log(deserializedTree1);
/*
Виведе:
TreeNode {
  val: 1,
  right: TreeNode {
    val: 3,
    right: TreeNode { val: 5, right: null, left: null },
    left: TreeNode { val: 4, right: null, left: null }
  },
  left: TreeNode { val: 2, right: null, left: null }
}
*/

// Приклад 2
const tree2 = null;

const serializedTree2 = serialize(tree2);
console.log(serializedTree2); // Виведе "null"

const deserializedTree2 = deserialize(serializedTree2);
console.log(deserializedTree2); // Виведе null
