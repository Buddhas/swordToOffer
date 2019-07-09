function TreeDepth(pRoot)
{
    if(!pRoot) return 0;
    var left = 1 + TreeDepth(pRoot.left);
    var right = 1+ TreeDepth(pRoot.right);
    return Math.max(left,right)
}