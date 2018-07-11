function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin) {
  var root = new TreeNode(pre[0]); //前序第一个数为节点
  var len = pre.length;
  if (len === 1) {
    root.left = null;
    root.right = null;
  }
  var rootVal = root.val;
  var index = vin.indexOf(rootVal);
  //创建左子树
  if (index > 0) {
      var nextPre = []
      var nextVin = []
      //前序值
      for(var i = 1; i <= index; i++){
        nextPre.push(pre[i])
      }
      //中序值
      for(var i = 0; i < index; i++){
          nextVin.push(vin[i])
      }
      root.left=reConstructBinaryTree(nextPre,nextVin)
  }else{
      root.left = null
  }

  //创建右字树
  if(len - index - 1 > 0){
    var nextPre = []
    var nextVin = []
    for(var j=index+1;j<len;j++){
        nextVin[j-index-1]=vin[j];
        nextPre[j-index-1]=pre[j];
    }
    root.right=reConstructBinaryTree(nextPre,nextVin);

  }
  return root
}

reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7])