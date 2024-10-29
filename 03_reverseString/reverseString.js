const reverseString = function(str) {

    let newstring = ""

    for (let i = 0; i < str.length; i++) { 
        newstring += str[str.length - 1 - i];
    }

    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
