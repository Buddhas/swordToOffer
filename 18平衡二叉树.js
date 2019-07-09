function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var isBalanced = true;
function IsBalanced_Solution(pRoot){
    if(pRoot == null){
        return true;
    }
    IsBalanced(pRoot);
    var result = isBalanced;
    isBalanced = true;
    return result;
}
function IsBalanced(pRoot){
    if(pRoot == null){
        return 0;
    }
    var left = 0,
        right = 0;
    if(pRoot.left){
        left = IsBalanced(pRoot.left);
    }
    if(pRoot.right){
        right = IsBalanced(pRoot.right);
    }
    if(Math.abs(left - right) > 1){
        isBalanced = false;
    }
    return left > right ? left + 1 : right + 1;
}