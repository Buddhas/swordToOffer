function ListNode(x) {
  this.val = x;
  this.next = null;
}

function deleteDuplication(pHead) {
  if (pHead == null || pHead.next == null) {
    // 只有0个或1个结点，则返回
    return pHead;
  }
  if (pHead.val == pHead.next.val) {
    // 当前结点是重复结点
    var pNode = pHead.next;
    while (pNode != null && pNode.val == pHead.val) {
      // 跳过值与当前结点相同的全部结点,找到第一个与当前结点不同的结点
      pNode = pNode.next;
    }
    return deleteDuplication(pNode); // 从第一个与当前结点不同的结点开始递归
  } else {
    // 当前结点不是重复结点
    pHead.next = deleteDuplication(pHead.next); // 保留当前结点，从下一个结点开始递归
    return pHead;
  }
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(2);
var node4 = new ListNode(3);
// var node5 = new ListNode(4);
// var node6 = new ListNode(4);
// var node7 = new ListNode(5);
// var node8 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;
// node7.next = node8;

console.log(deleteDuplication(node1));
