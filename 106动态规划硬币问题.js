function coinMin(num) {
    let arr = new Array(num + 1)
    arr[0] = arr[0] + 1
    let V = [1, 3, 5]
    for(let i = 1; i <= num; i++) {
        arr[i] = arr[i - 1] + 1
        for(let j = 0; j < V.length; j++) {
            if (i < V[j]) {
                break
            } else {
                if (arr[i - V[j]] < arr[i - 1]) {
                    arr[i] = arr[i - V[j]] + 1
                }
            }
        }
    }
    return arr[num]
}

console.log(coinMin(11))