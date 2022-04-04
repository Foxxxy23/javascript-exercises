const leapYears = function(year) {
    let leapYears = false;
    if(year % 4 === 0){
        if(year % 100 === 0 && year % 400 === 0){
            leapYears = true;
            return leapYears;
        }
        if(year % 100 === 0){
            leapYears = false; 
        }
        else{
            leapYears = true;
        }
    }
    return leapYears;
};

// Do not edit below this line
module.exports = leapYears;
