
/**
 * 第一题
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
function Find(target, array)
{
    let row = array.length;
    let col = array[0].length;
    for(let i = col - 1, j = 0; i >= 0 && j < row;) {
        if (target == array[j][i]) {
            return true;
        } else if (target > array[j][i]) {
            j++
        } else {
            i--
        }
    }
    return false
}

function create(n,m){
    var arr = new Array(n)
    for(var i = 0; i < n; i++){
        arr[i] = new Array(m)
    } 
    var num = 0;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m; j++){
            arr[i][j] = num
            num++
        }
    }
    return arr
}