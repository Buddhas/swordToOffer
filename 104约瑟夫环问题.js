class Joseph {
    constructor() {
        this.arr = []
    }
    arrCompute(len, pos) {
        let arr = new Array(len)
        let leave = len // 剩下多少人
        let index = 1 // 标记从哪里开始
        let count = 1 // 计数器，每过一个人加一，加到pos时归零
        for(let i = 1; i < len + 1; i++) {
            arr[i] = true
        }
        while(leave > 1) {
            if (arr[index]) {
                if (count == pos) {
                    arr[index] = false
                    count = 1
                    leave--
                } else {
                    count++
                }
            } 
            index++
            if (index > len) {
                index = 1
            }
        }
        for(let i = 1; i < len + 1; i++) {
            if (arr[i]) {
                return i
            }
        }
    }
}

let joseph = new Joseph()
joseph.arrCompute(5, 2)
console.log(joseph.arrCompute(5, 1))