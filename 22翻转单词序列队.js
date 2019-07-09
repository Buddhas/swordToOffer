function ReverseSentence(str)
{
    let res = str.split(' ')
    let tempStr = ''
    for(let i = 0; i < res.length; i++) {
        tempStr = tempStr + res[res.length - 1 - i] + ' '
    }
    return tempStr.slice(0, tempStr.length - 1)
}
console.log(ReverseSentence('I am a student.'))