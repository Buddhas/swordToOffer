function LeftRotateString(str, n)
{
    if(str==null||str.length==0){
        return "";
    }
    return str.slice(n)+str.slice(0,n);   
}