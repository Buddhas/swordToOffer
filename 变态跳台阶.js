function jumpFloorII(number){
    if(number === 1){
        return 1
    }
    else{
        return 2*jumpFloorII(number - 1)
    }
}