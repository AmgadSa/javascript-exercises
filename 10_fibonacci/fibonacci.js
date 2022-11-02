const fibonacci = function(x) {
    let y = [1,1,2];
    while(y.length<x){
        y =[...y,y[y.length-2]+y[y.length-1]];
    }
    console.log(y);
    return y[x-1] || "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
