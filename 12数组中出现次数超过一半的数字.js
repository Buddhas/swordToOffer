function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var len=numbers.length;
    if(len==0)return 0;
    var num=numbers[0];
        count=1;
    for(var i=0;i<len;i++){
        if(num==numbers[i]){
            count++;
        }else{
            count--;
        }
        if(count==0){
            num=numbers[i];
            count=1;
        }
    }
    count=0;
    for(var i=0;i<len;i++){
        if(numbers[i]==num)count++;
    }
    if(count*2>len)return num;
    return 0;
}