
var head = new ListNode()
function ReverseList(pHead)
{
    swap(pHead)
    pHead.next = null
    console.log(head)
    
}
function ListNode(x){
    this.val = x;
    this.next = null;
}

function swap(node){
    if(node.next === null){
        head = node
        return node
    }else{
        
        swap(node.next).next = node
        return node
    }
}

var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4
ReverseList(node1)

