const palindromes = function (str) {
    let pal = str.toLowerCase().split('').filter(x=>/\w/g.test(x));
    return pal.join('')==[...pal].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
