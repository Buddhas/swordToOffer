function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var arr = [];
function Serialize(pRoot)
{
    // write code here
    if(pRoot==null){
        arr.push('a');
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
        
}
function Deserialize(s)
{
    // write code here
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
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

Serialize(n1)

let node = Deserialize(arr)
test(node)


function test(node) {
    if (node == null) {
        return
    }
    console.log(node.val)
    if (node.left) {
        test(node.left)
    } 
    if (node.right) {
        test(node.right)
    }
}