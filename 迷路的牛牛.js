function diection(num,str){
    var dirArr = ["N","E","S","W"]
    var index = 0
    for(var i = 0; i < num; i++){
        if(str[i] === 'L'){
            if(index === 0){
                index = 3
            }else{
                index--
            }
        }else{
            if(index === 3){
                index = 0
            }else{
                index++
            }
        }
    }
    console.log(dirArr[index])

}

diection(3,"LRR")