
/**
 * 第三题
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}

// 方法一： 递归求法
// function printListFromTailToHead(head)
// {
//     var res = []
//     test(head,res)
//     return res
// }
// function test(head,res) {
//     if (head == null) return
//     if (head.next == null) {
//         res.push(head.val)
//     } else {
//         test(head.next, res)
//         res.push(head.val)
//     }
// }
// 方法二：迭代求法
function printListFromTailToHead(head) {
    let res = []
    while(head != null) {
        res.unshift(head.val)
        head = head.next
    }
    return res
}



var node1 = new ListNode(5)
var node2 = new ListNode(81)

var node3 = new ListNode(61)
var node4 = new ListNode(95)
node1.next = node2
node2.next = node3
node3.next = node4
printListFromTailToHead(node1)