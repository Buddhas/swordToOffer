var getChilChuan = function(str) {
    
}

function getChilChuanTemp(str) {
    if (str.length > 1) {
        getChilChuanTemp(str.substr(1))
    }
    console.log(str)
}

getChilChuanTemp('abcabcbb')