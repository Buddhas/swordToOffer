function duplicate(numbers, duplication)
{
    for(i = 0; i < numbers.length; i++) {
        while(numbers[i] != i) {
            if (numbers[i] == numbers[numbers[i]]) {
                duplication[0] = numbers[i]
                return true
            }
            swap(numbers, i, numbers[i])
        }
    }
    return false
}

function swap(numbers,i,val) {
    var temp = numbers[i]
    numbers[i] = val
    val = temp
}