function HasSubtree(pRoot1, pRoot2){
    var result = false
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