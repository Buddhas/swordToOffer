
/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * @param {*} array 
 */
function reOrderArray(array)
{
    let left = []
    let right = []
    for (const item of array) {
        if (item % 2 == 0) {
            right.push(item)
        } else {
            left.push(item)
        }
    }
    return left.concat(right)
}

function reOrderArray(array) {
    for(let i = 1; i <= array.length; i++) {
        if (array[i -1]  )
    }
}