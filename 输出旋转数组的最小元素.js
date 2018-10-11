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
}