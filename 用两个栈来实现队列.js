let stack1 = []
let stack2 = []
//入队操作
function push(node){
    stack1.push(node)
}
//出队操作
function pop(){
    if(stack2.length === 0){
        if(stack1.length === 0){
            return null
        }else{
            let len = stack1.length
            for(let i = 0; i < len; i++){
                stack2.push(stack1.pop())
            }
            return stack2.pop();
        }
    }else{
       return stack2.pop()
    }
}