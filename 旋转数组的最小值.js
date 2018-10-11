function minNumberInRotateArray(rotateArray)
{
    rotateArray.sort((n,m)=>{
        return n - m
    })
    console.log(rotateArray)
    if(rotateArray.length == 0){
        return 
    }else{
        return rotateArray[0]
    }
}