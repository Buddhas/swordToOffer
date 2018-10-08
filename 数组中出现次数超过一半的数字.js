

function MoreThanHalfNum_Solution(arr){
    arr.sort((m,n)=>{
        return m-n
    })
    
    let temp = arr[0]
    let half = Math.ceil((arr.length)/2)
    
    for(let i = 0; i < arr.length; i++){
        temp = arr[i]
        num = 1
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] == temp){
                num++
                i = j
                if(num >= half){
                     console.log(temp)
                     return
                }
            }
        }
    }
    console.log(0)
}

MoreThanHalfNum_Solution([1,2,3,2,4,2,5,2,3])