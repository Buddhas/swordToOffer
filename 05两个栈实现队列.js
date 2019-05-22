let stack1 = [] // 入队列
let stack2 = [] // 出队列

function push(item) {
    stack1.push(item)
}

function pop() {
    if (stack2.length == 0) {
        if (stack1.length == 0) {
            return null
        } else {
            let len = stack1.length
            for(let i = 0; i < len; i++) {
                stack2.push(stack1.shift())
            }
            return stack2.shift()
        }
    }
    else {
        return stack2.shift()
    }
}