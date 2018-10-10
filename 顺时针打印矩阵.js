/*function printMatrix(matrix)
{
    let left = 0 //左上
    let right = matrix[0].length - 1
    let top = 0 //顶部开始
    let bottom = matrix.length - 1
    let arr = []
    while(bottom >= top && left <= right){
        
        for(let i = left; i <= right; i++){
            arr.push(matrix[top][i])
        }
       
        for(let i = top + 1; i <= bottom; i++){
            arr.push(matrix[i][right])
        }
       
        for(let i = right - 1; i >= left; i--){
            arr.push(matrix[bottom][i])
        }
        
        for(let i = bottom - 1; i >= top; i--){
            arr.push(matrix[i][left])
        }
        left++
        top++
        bottom--
        right--
    }
    return res;
}*/

function printMatrix(matrix) {
  // write code here
  var row = matrix.length;
  var col = matrix[0].length;
  var res = [];
  if (row == 0 || col == 0) {
    return res;
  }
  var left = 0,
    top = 0,
    right = col - 1,
    bottom = row - 1;
  while (left <= right && top <= bottom) {
    //左到右
    for (var i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    //上到下
    for (var i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    //右到左
    if (top != bottom) {
      for (var i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
    }
    //下到上
    if (left != right) {
      for (var i = bottom - 1; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }

    left++, top++, right--, bottom--;
  }
  return res;
}

printMatrix([[1], [2], [3], [4], [5]]);
