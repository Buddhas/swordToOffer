//  function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// } 
// function Print(pRoot)
// {
//     let stack1 = [] // 保存奇数节点
//     stack1.push(pRoot)
//     let stack2 = [] // 保存偶数节点
//     let cen = 1 // 记录当前行数
//     let result = []
//     while(stack1.length != 0 || stack2.length != 0) {
//         if (cen % 2 != 0) {
//             while(stack1.length > 0) {
//                 let node = stack1.pop()
//                 if (node != null) {
//                     stack2.push(node.left)
//                     stack2.push(node.right)
//                     result.push(node.val)
//                 }
//             }
//             if (stack1.length == 0) {
//                 cen++
//             }
//         } else {
//             while(stack2.length > 0) {
//                 let node = stack2.pop()
//                 if (node != null) {
//                     stack1.push(node.right)
//                     stack1.push(node.left)
//                     result.push(node.val)
//                 }
//             }
//             if (stack2.length == 0) {
//                 cen++
//             }
//         }
//     }
//     return result
// }

// var n1 = new TreeNode(1)
// var n2 = new TreeNode(2)
// var n3 = new TreeNode(3)
// var n4 = new TreeNode(4)
// var n5 = new TreeNode(5)
// var n6 = new TreeNode(6)
// var n7 = new TreeNode(7)

// n1.left = n2
// n1.right = n3
// n2.left = n4
// n2.right = n5
// n3.left = n6
// n3.right = n7

// console.log(Print(n1))


function Print(pRoot)
{
    if(!pRoot) {
        return []
    }
    var queue = []
    var res = []
    queue.push(pRoot)
    var count = 0
    while(queue.length) {
        var len = queue.length
        var temp = []
        for(var i = 0; i < len; i++) {
            var node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            if(count % 2 === 0) {
                temp.push(node.val)
            } else {
                temp.unshift(node.val)
            }
        }
        res.push(temp)
        count++
    }
    return res
}