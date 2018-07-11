function Find(target, array)
{
    var rowCount  = array[0].length //列数
    var colCount  = array.length //行数
    console.log(rowCount)
    console.log(colCount)
    console.log(array)
    for(i = colCount - 1,j = 0; i >= 0 && j < colCount;){
        if(array[i][j] === target){
            return true
        }else if(array[i][j] < target){
            j++
            continue
        }else if(array[i][j] > target){
            i--
            continue
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
console.log(Find(169,create(12,13)))
