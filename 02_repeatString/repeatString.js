const repeatString = function(word, amount) {
    if(amount < 0){
        let repeatString = "ERROR"
        return repeatString;
    }
    let repeatString = ""
    for (let a = 0; a < amount; a++) {
        repeatString = repeatString + word;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
