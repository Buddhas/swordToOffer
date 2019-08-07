 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
var i = 0
function KthNode(pRoot, k)
{
    // write code here
    if(k<=0){
        return null;
    }
    var count=0;
    function Knodes(pRoot, k){
        if(pRoot!==null){
            var node = Knodes(pRoot.left, k);
            if(node!==null){return node;}
            count++;
            if(count==k){return pRoot;}
 
            node = Knodes(pRoot.right, k);
            if(node!==null){return node;}
        }
        return null;
    }
    return Knodes(pRoot,k);
}

var n1 = new TreeNode(8)
var n2 = new TreeNode(6)
var n3 = new TreeNode(10)
var n4 = new TreeNode(5)
var n5 = new TreeNode(7)
var n6 = new TreeNode(9)
var n7 = new TreeNode(11)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6
n3.right = n7

console.log(KthNode(n1, 2))
