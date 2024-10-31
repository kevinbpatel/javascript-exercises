const palindromes = function (str) {

    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();

    for (let i = 0; i < cleanStr.length; i++) { 
        console.log(cleanStr[i], cleanStr[cleanStr.length - 1 - i]);
        if (cleanStr[i] != cleanStr[cleanStr.length - 1 - i])  {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
