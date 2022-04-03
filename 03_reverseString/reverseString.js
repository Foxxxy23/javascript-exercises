const reverseString = function(reverseInput) {
    let reverseString = "";
        for(let i = reverseInput.length; i >= 0; i--){
            reverseString = reverseString + reverseInput.charAt(i);
        }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
