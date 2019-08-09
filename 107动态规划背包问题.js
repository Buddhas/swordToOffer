function backpack(totalCap, capArr) {
    let capLen = capArr.length
    // i标识第i个物体，j标识当前的最大容量
    let maxArr = new Array(capLen)
    for(let i = 0; i < capLen; i++) {
        maxArr[i] = new Array(totalCap)
        for(let j = 0; j <= totalCap; j++) {
            maxArr[i][j] = 0
        }
    }
    for(let i = ; i < capLen; i++) {
        for(let j = 1; j <=totalCap; j++) {
            if (capArr[i][1] > j) {
                if (i - 1 < 0) {
                    continue
                } else {
                    maxArr[i][j] = maxArr[i - 1][j]
                }
            } else {
                maxArr[i][j] = Math.max(maxArr[i - 1][j], maxArr[i - 1][j - capArr[i - 1][1]] + capArr[i - 1][0])
            }
        }
    }
    return maxArr
}
// 质量、体积
console.log(backpack(10, [[2,2],[3,4],[1,4],[5,1]]))