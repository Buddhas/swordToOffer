function Permutation(str)
{
    test(str, '')
}
let resList = []
function test(str,res) {
    if (str.length == 1) {
        resList.push(res + str)
        return
    } 
    for(let i = 0; i < str.length; i++) {
        test()
    }
}

Permutation('abc')
console.log(resList)