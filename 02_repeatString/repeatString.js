const repeatString = function(string,repeatNumber) {
    let repeatedString = '';
    if(repeatNumber<0){
        return 'ERROR'
    }
    for (let i = 1; i<=repeatNumber;i++){
        repeatedString = repeatedString.concat(string)
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
