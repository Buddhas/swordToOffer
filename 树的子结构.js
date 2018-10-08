 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function HasSubtree(pRoot1, pRoot2){
    let result = false
    if(pRoot1 != null && pRoot2 != null){
        //根节点相同
        if(pRoot1.val == pRoot2.val){
            result = doesTree1HaveTree2(pRoot1,pRoot2)
        }
        if(!result){
            result = HasSubtree(pRoot1.left,pRoot2)
        }
        if(!result){
            result = HasSubtree(pRoot1.right,pRoot2)
        }
    }
    return result
}
//判断是否是子树
function doesTree1HaveTree2(pRoot1,pRoot2){
    //如果proot2结束了
    if(pRoot2 == null){
        return true
    }
    //如果proot2还没结束但是proot1结束了
    if(pRoot1 == null){
        return false
    }
    if(pRoot1.val != pRoot2.val){
        return false
    }
    return doesTree1HaveTree2(pRoot1.left,pRoot2.left) && doesTree1HaveTree2(pRoot1.right,pRoot2.right)
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
let a4 = new TreeNode(4)
let a5 = new TreeNode(5)
a1.left = a2
a1.right = a3
a2.left = a4
a3.right = a5


let b1 = new TreeNode(1)
let b2 = new TreeNode(2)
let b3 = new TreeNode(3)
let b4 = new TreeNode(4)
b1.right = b3
b1.left = b2
b3.left = b4

console.log(HasSubtree(a1,b1))