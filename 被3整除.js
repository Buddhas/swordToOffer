function a(n,r){
    if(n !== 1 || r < 1 || r > Math.pow(10,9)){
        return
    }
     var str = /^[0-9]*[1-9][0-9]*$/;
     if( !str.test(r)){
         return
     }
    var arr = []
    var j = 1
    for(var i = 0; i < r; i++){
        if(i === 0){
            arr[i] = 1
        }else{
            j = j + 1
            arr[i] = '' + arr[i - 1] + j
            arr[i] = parseInt(arr[i])
        }

    }
    console.log(check(arr))
}

function check(nums){
    var arr = nums.filter((num) => {

        return num % 3 === 0
    })
    return arr
}

a(1,6)