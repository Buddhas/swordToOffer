
function ListNode(val){
    this.val = val
    this.next = null
}

function judge(node, hash= new Map()) {
    while(node !== null) {
        if (!inList(node, hash)) {
            hash.set(node, node.val)
            node = node.next
        } else {
            return false
        }
    }
    return true
}

function inList(node, hash) {
    return hash.has(node)
}

var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)
var node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node1
console.log(judge(node1))
