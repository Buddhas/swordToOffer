function jumpFloor(number)
{
    let arr = new Array(number)
    for(let i = 0; i < number + 1; i++) {
        arr[i] = 0
    }   
    arr[1] = 1
    arr[2] = 2
    for(let i = 3; i < number+1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    } 
    return arr[number]
}
console.log(jumpFloor(1)) 