function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function isSymmetrical(pRoot)
{
    if(pRoot==null){
        return true
    }
    return temp(pRoot.left, pRoot.right)
}

function temp(left, right) {
    if(left == null || right == null) {
        return left == right;
    }
    if (left.val == right.val) {
        return temp(left.left, right.right) && temp(left.right, right.left)
    } else {
        return false
    }
}