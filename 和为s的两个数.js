function FindNumbersWithSum(array, sum) 
{ 
    // write code here 
    if(array.length < 2) 
        return []; 
    var start = 0, 
        end = array.length-1; 
    while(start < end){ 
        if(array[start]+array[end] < sum){ 
            start++; 
        }else if(array[start]+array[end] > sum){ 
            end--; 
        }else{ 
            return [array[start],array[end]]; 
        } 
    } 
    return []; 
}