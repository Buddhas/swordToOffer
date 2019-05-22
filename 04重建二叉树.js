 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    if (pre.length == 0 || vin == 0)return 
    let node = new TreeNode(pre[0])
    let index = vin.indexOf(pre[0])
    let vinleft = vin.slice(0, index)
    let vinright = vin.slice(index + 1)
    let preleft = pre.slice(1, 1 + vinleft.length)
    let preright = pre.slice(1+vinleft.length)
    node.left = reConstructBinaryTree(preleft, vinleft)
    node.right = reConstructBinaryTree(preright, vinright)
    return node
}
traverse(reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]))
console.log('!!!!!!!!!!')
traversemid(reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]))
function traverse(node) {
    if (node == null) {
        return
    } 
    console.log(node.val)
    if (node.left != null) {
        traverse(node.left)
    } 
    if (node.right != null) {
        traverse(node.right)
    }
}
function traversemid(node) {
    if (node == null) {
        return
    } 
    
    if (node.left != null) {
        traverse(node.left)
    } 
    console.log(node.val)
    if (node.right != null) {
        traverse(node.right)
    }
}

