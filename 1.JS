String.prototype.replaceAll = function (FindText, RepText) { 
    return this.split(FindText).join(RepText);  
}
// 开始测试
var s = "abcdefabcedf(123)";
console.log(s.replaceAll("b", "B"));    // 正常
console.log(s.replaceAll("(", "["));    // 挂了。。。
