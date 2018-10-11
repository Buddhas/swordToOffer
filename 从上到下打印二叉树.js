 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
//典型的bfs
function PrintFromTopToBottom(root)
{
    let arr = []
    let data = []
    if(root != null){
        arr.push(root)
    }
    while(arr.length != 0){
        let node = arr.shift()
        if(node.left != null){
            arr.push(node.left)
        }
        if(node.right != null){
            arr.push(node.right)
        }
        data.push(node.val)
    }
    return data
}
