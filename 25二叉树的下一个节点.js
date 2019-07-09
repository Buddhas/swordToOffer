function GetNext(pNode)
{
    if(!pNode){return null;}    // 空指针
    var p = null;
    if(pNode.right){            // 存在右子树
        p = pNode.right;
        while(p.left){
            p = p.left;
        }
    }else{                      // 不存在右子树
        p = pNode.next;
        if(pNode.next && pNode.next.right == pNode){
            while(p.next && p.next.right == p){
                p = p.next;
            }
            if(p.next == null){
                p =  null;
            }else{
                p = p.next;
            }
        }
    }
    return p;
}