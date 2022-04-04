const removeFromArray = function(userArray, ...numberRemoval) {
    console.log("Array before mods = " + userArray)
    numberRemoval.sort((a,b) => { return a - b; });
    console.log(numberRemoval);
        for(let i = numberRemoval.length - 1; i >= 0; i--){
            if(typeof numberRemoval[i] === "number"){
                let removedItem = userArray.splice((numberRemoval[i] - 1), 1);
                console.log("Index of removed item = " + (numberRemoval[i]));
                console.log("Name of removed item = " + removedItem);
                console.log("Array after mods = " + userArray);
            }
            if(typeof numberRemoval[i] === "string" && userArray.includes(numberRemoval[i])){
                userArray.splice(numberRemoval[i], 1);
                console.log(userArray);
                console.log("Value of removed item = " + (numberRemoval[i]-1));
            }
        }
    let removeFromArray = userArray;
    return removeFromArray;
};

// Do not edit below this line
module.exports = removeFromArray;
