const removeFromArray = function(arr, ...valuesToRemove) {

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (!valuesToRemove.includes(arr[i])) { 
            newArray.push(arr[i]);
        }
    } 
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
