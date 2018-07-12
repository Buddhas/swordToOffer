function jumpFloor(number){
    if(number === 1){
        return 1
    }
    if(number === 2){
        return 2
    }
    var arr = new Array(number+1)
    arr[1] = 1
    arr[2] = 2
    for(var i = 3; i <= number; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[number]
}