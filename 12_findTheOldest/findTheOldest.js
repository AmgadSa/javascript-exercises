const findTheOldest = function(list) {
    return list.reduce((y,x)=>{
        let year = new Date().getFullYear();
        let age1 = (x.yearOfDeath || year)-x.yearOfBirth;
        let age2 = (y.yearOfDeath || year)-(y.yearOfBirth || year);
        return (age1) > (age2) ? x : y;
    }
    , {})
};

// Do not edit below this line
module.exports = findTheOldest;
