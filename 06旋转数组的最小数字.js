/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */
// 解法一： 二分法，时间复杂度为log（N）
function minNumberInRotateArray(rotateArray) {
  let low = 0;
  let height = rotateArray.length - 1;
  let mid = 0;
  while (low < height) {
    mid = low + parseInt((height - low) / 2);
    if(height - low == 1){
        mid = height;
        break;
    }
    if (rotateArray[mid] > rotateArray[height]) {
      low = mid;
    } else if (rotateArray[mid] < rotateArray[height]) {
      height = mid;
    } else {
        height = height - 1;
    }
  }
  return rotateArray[mid];
}
console.log(minNumberInRotateArray([1,0,1,1,1] ));


// 解法二： 排序之后取第一个
function minNumberInRotateArray(rotateArray)
{
    rotateArray.sort((n,m)=>{
        return n - m
    })
    
    if(rotateArray.length == 0){
        return 
    }else{
        return rotateArray[0]
    }
}}