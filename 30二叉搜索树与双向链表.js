function convertNode(node, lastNodeInList = null) {
    if (!node) {
      return null;
    }
  
    // 先处理左子树
    if (node.left) {
      lastNodeInList = convertNode(node.left, lastNodeInList);
    }
  
    // 将当前节点与原双向链表拼接
    node.left = lastNodeInList;
    if (lastNodeInList) {
      lastNodeInList.right = node;
    }
  
    // 处理右子树
    lastNodeInList = node;
    if (node.right) {
      lastNodeInList = convertNode(node.right, lastNodeInList);
    }
  
    // 返回新链表的尾节点
    return lastNodeInList;
  }
  
  /**
   *
   * @param {TreeNode} root
   */
  function Convert(root) {
    let lastNodeInList = convertNode(root);
    let headOfList = lastNodeInList;
    // 返回转化好的双向链表的头节点
    while (headOfList && headOfList.left) {
      headOfList = headOfList.left;
    }
    return headOfList;
  }