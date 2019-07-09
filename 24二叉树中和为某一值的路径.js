function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function FindPath(root, expectNumber) {
  // write code here
}

function depFind(root,arr,sum,expectNumber,allPath) {
  if (root.left) {
    depFind(root.left,arr.push(root.val),sum+arr.val,expectNumber,allPath)
  }
  if (root.right) {
    depFind(root.right,arr.push(root.val),sum+arr.val,expectNumber,allPath)
  }
  if (root.left == null && root.right == null && sum + root.val == expectNumber) {
    allPath.push(arr.push(root.val))
  }
  
}
