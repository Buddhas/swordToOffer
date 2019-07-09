function LastRemaining_Solution(n, m)
{
    // write code here
    if(n == 0){
        return -1;
    }
    if(n == 1){
        return 0;
    }else{
        return (LastRemaining_Solution(n - 1, m) + m) % n;
    }
     
}