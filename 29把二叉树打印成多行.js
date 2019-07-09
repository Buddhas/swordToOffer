function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Print(pRoot)
{
    let stack = [pRoot]
    let arr = []
    while(stack.length > 0) {
        let node = stack.shift()
        if (node.left != null) {
            stack.push(node.left)
        } 
        if (node.right != null) {
            stack.push(node.right) 
        }
        arr.push(node.val)
    }
    return arr
}
var n1 = new TreeNode(1)
var n2 = new TreeNode(2)
var n3 = new TreeNode(3)
var n4 = new TreeNode(4)
var n5 = new TreeNode(5)
var n6 = new TreeNode(6)
var n7 = new TreeNode(7)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6
n3.right = n7
console.log(Print(n1))