function minNumberInRotateArray(rotateArray)
{
    //长度为0 则返回0
    if(rotateArray.length === 0){
        return 0
    }

    var left = 0
    var right = rotateArray.length - 1
    var mid = 0
    while(rotateArray[left] >= rotateArray[right]){
        if( right - left === 1){
            mid = right
            break
        }
        mid = parseInt((left + right)/2)
        if(rotateArray[mid] > rotateArray[left]){
            left = mid
        }
        if(rotateArray[mid] < rotateArray[right]){
            right = mid
        }
        if(rotateArray[left] == rotateArray[mid] && rotateArray[left] == rotateArray[right]){
            return orderFind(rotateArray,left,right)
        }
    }
    return rotateArray[mid]

}
function orderFind(arr,left,right){
    var min = arr[left]
    for(var i = left + 1; i <= right; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
console.log(minNumberInRotateArray([1,1,1,0,1]))
