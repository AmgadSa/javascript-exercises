const sumAll = function(number1,number2) {
    if (typeof (number1+number2) != typeof 1 || number1*number2<0 ){
        return 'ERROR'
    }
    let greaterNumber =  (number1>number2) ? number1 : number2;
    let lesserNumber = (number1<number2) ? number1 : number2;
    let sum = 0;
    for(let i=lesserNumber; i<=greaterNumber; i++){
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
