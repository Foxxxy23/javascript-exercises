const removeFromArray = function(userArray, ...numberRemoval) {
    console.log("Array before mods = " + userArray)
    let counter = 1;
        for(let i = 0; i < numberRemoval.length; i++){
            if(typeof numberRemoval[i] === "number"){
                let removedItem = userArray.splice((numberRemoval[i]-counter), 1);
                console.log("Index of removed item = " + (numberRemoval[i]-counter));
                console.log("Name of removed item = " + removedItem);
                console.log("Array after mods = " + userArray);
                console.log("counter = " + counter);
                counter = counter + 1;
            }
            if(typeof numberRemoval[i] === "string" && userArray.includes(numberRemoval[i])){
                userArray.splice(numberRemoval[i]-counter, 1);
                console.log(userArray);
                console.log("Value of removed item = " + (numberRemoval[i]-1));
                counter = counter + 1;
            }
        }
    let removeFromArray = userArray;
    return removeFromArray;
};

// Do not edit below this line
module.exports = removeFromArray;
