const findTheOldest = function(people) {
    let oldest = null;
    let oldestAge = 0;

    for (const person of people) { 
        
        if (person.yearOfDeath == undefined) { 
            person.yearOfDeath = new Date().getFullYear();
        }
        
        if ((person.yearOfDeath - person.yearOfBirth) > oldestAge) {
            oldest = person;
            oldestAge = person.yearOfDeath - person.yearOfBirth;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
