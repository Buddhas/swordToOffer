function Merge(pHead1, pHead2) {
    let head = new ListNode()
    if (pHead1 == null) {
        return pHead2
    }
    if (pHead2 == null) {
        return pHead1
    }
    if (pHead1.val <= pHead2.val) {
        head = pHead1
        head.next = Merge(pHead1.next, pHead2)
    } else {
        head = pHead2
        head.next = Merge(pHead1, pHead2.next)
    }
    return head
}