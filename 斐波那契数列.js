
//递归
/*function Fibonacci(n)
{
    
    if(n === 0){
        console.log(0)
        return
    }
    console.log(sum(n))
}

function sum(n){
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 1 
    }
    else{
        return sum(n - 1) + sum(n - 2)
    }
}
Fibonacci(39)*/


//动态规划
function Fibonacci(n){
    if(n == 0){
        console.log(0)
        return
    }
    var arr = new Array(n + 1)
    arr[1] = 1
    arr[2] = 1
    for(var i = 3; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
     console.log(arr[n])
}
Fibonacci(39)