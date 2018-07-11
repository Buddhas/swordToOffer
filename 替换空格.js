function replaceSpace(str)
{
     for(var i = 0; i < str.length; i++){
         if(str.charAt(i) == ' '){
            var arrStr = str.split("")
            arrStr.splice(i,1,'%20')
            str = arrStr.join("")
         }
     }
     console.log(str)
}
replaceSpace("i am god")