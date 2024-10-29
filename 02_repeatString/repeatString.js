const repeatString = function(str, num) {
    let combinedstr = "";

    if (num < 0) return "ERROR";
    

    for (let i = 0; i < num; i++) { 
        combinedstr += str;
    }

    return combinedstr;

};

// Do not edit below this line
module.exports = repeatString;
