function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
let head = null
function swap(root){
    let head = root
    if(root == null){
        return
    }
    if(root.left == null && root.right == null){
        return
    }
    let temp = root.left
    root.left = root.right
    root.right = temp
    if(root.left != null){
        Mirror(root.left)
    }
    if(root.right != null){
        Mirror(root.right)
    }
    return head
}
function Mirror(root)
{
    head = swap(root)
    return head
}