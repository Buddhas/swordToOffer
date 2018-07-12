var sumNum = 0;

function sum(n,m,arr,len){
    if(n === m){
        sumNum++
    }else{
        for(var i = len; i < arr.length; i++){
            sum(n,m + 1,arr,i + 1)
        }
    }

}
sum(3,0,[1,2,3,4],0)
console.log(sumNum)