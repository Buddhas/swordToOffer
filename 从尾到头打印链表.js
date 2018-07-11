function ListNode(val){
    this.val = val
    this.next = null
}
function printListFromTailToHead(head)
{
    var print = []
    var headNode = head
    while(headNode !== null){
        print.unshift(headNode.val)
        headNode = headNode.next
    }
    console.log(print)
}
var node1 = new ListNode(1)
var node2 = new ListNode(2)

var node3 = new ListNode(3)
node1.next = node2
node2.next = node3
printListFromTailToHead(node1)