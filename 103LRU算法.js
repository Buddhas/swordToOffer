class Lru {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    insertNode(val) {
        let node = new Node(val) 
        if (!this.head) {
            this.head = node
            this.tail = node
            this.length = 1
        } else {
            // 如果数据存在双向链表中
            if (this.findNode(val)) {
                let node = this.head
                let current = node
                let pre = null
                // 头部等于输入值
                if (this.head.key == val) {
                    if (this.length == 1) {
                        return
                    } else {
                        current = this.head
                        this.head = this.head.next
                        this.head.pre = null
                        this.tail.next = current
                        current.next = null
                        current.pre = this.tail
                        this.tail = current
                    }
                } else if(this.tail == val){
                    return
                } else {
                    while(node) {
                        if (node.key == val) {
                            break
                        } else {
                            node = node.next
                        }
                    }
                    current = node
                    pre = node.pre
                    pre.next = current.next
                    current.next.pre = pre
                    this.tail.next = node
                    node.pre = this.tail
                    node.next = null
                    this.tail = node
                }
            } else {
                this.tail.next = node
                node.pre = this.tail
                this.tail = node
                this.length++
            }
        }
    }
    findNode(val) {
        let node = this.head
        while(node.next) {
            if (node.key == val) {
                return true
            } else {
                node = node.next
            }
        }
        return false
    }
    print() {
        let node = this.head
        while(node) {
            console.log(node.key) 
            node = node.next
        }
    }
}

class Node {
    constructor(key) {
        this.next = null
        this.pre = null
        this.key = key
    }
}

let lru = new Lru()
lru.insertNode(1)
lru.insertNode(2)
lru.insertNode(3)
lru.insertNode(4)
lru.insertNode(5)
lru.insertNode(4)
lru.insertNode(3)
lru.print()
