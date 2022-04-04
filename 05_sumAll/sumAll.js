const sumAll = function(a, b) {
    let c = 0;
    if(a < 0 || typeof a != "number"){
        return "ERROR";
    }
    if(b < 0 || typeof b != "number"){
        return "ERROR";
    }
    if(a < b){
        while(a <= b){
            c = c + a;
            a = a + 1;
            }
        if(a > b){
            let sumAll = c;
            return sumAll;
            }

        }
    if(a > b){
        while(b <= a){
            c = c + b;
            b = b + 1;
            }
    }
    let sumAll = c;
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
