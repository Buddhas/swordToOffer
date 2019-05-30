
/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

 function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k) {
    if (head == null) {
        return false;
    }
    var currNode = head;
    var arr = [];
    while (currNode != null) {
        arr.push(currNode);
        currNode = currNode.next;
    }
    return arr[arr.length - k];
}

function FindKthToTail(head, k) {
    let first = null
    let sec = head
    for(let i = 1; i < k; i++) {
        head = head.next
        if (head == null) {
            return null
        }
    }
    first = head
    while(first.next != null) {
        first = first.next
        sec = sec.next
    }
    return sec.val
}


let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

console.log(FindKthToTail(n1, 3))
