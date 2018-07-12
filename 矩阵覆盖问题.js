function rectCover(number)
{
    if(number === 0 || number === 1 || number ===2){
        return number
    }
    else{
        return rectCover(number - 1) + rectCover(number - 2)
    }
}