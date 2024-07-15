class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      this._insertNode(this.root, newNode);
      return this;
    }
  }
  _insertNode(current, newNode) {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this._insertNode(current.left, newNode);
      }
    } else if (newNode.value > current.value) {
      if (current.right === null) {
        current.right = newNode;
      } else {
        this._insertNode(current.right, newNode);
      }
    }
  }

  search(val) {
    if (this.root === null) return false;
    return this._searchNode(this.root, val);
  }

  _searchNode(current, val) {
    if (current === null) return false;
    if (val < current.value) {
      return this._searchNode(current.left, val);
    } else if (val > current.value) {
      return this._searchNode(current.right, val);
    } else {
      return true;
    }
  }

  //Breadth first search(BFS) queue
  BFS() {
    var data = [],
      queue = [],
      node = null;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //Depth first search
  //preorder
  preOrder() {
    var data = [];
    function traverse(node){
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;  
  }

  postOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  inOrder(){
    var data = []; 
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
// bst.insert(7);
// bst.insert(9);
// bst.insert(45);
console.log(bst.inOrder());
// console.log(bst.search(7));
// console.log(bst.BFS());
