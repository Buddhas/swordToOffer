function minNumberInRotateArray(rotateArray)
{
    rotateArray.sort((n,m)=>{
        return n > m
    })
    console.log(rotateArray)
    
}