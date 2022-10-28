const removeFromArray = function(...args) {
    let changedArray = [...args[0]];
    let index;
    for (let i=0 ;i<args.length-1;i++){
        index = changedArray.indexOf(args[i+1]);
        (index >= 0) ? changedArray.splice(index,1):':)';
    }

    return changedArray
};

// Do not edit below this line
module.exports = removeFromArray;
