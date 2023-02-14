"use strict";
let myName = "Ubaid ur rehman";
console.log("myName->" + myName);
console.log("myName-> " + myName.toUpperCase());
console.log("myName-> " + myName.toLowerCase());
console.log("title-> " + titleCase(myName));
function titleCase(str) {
    var nArr = str.toLowerCase().split(' '); // how to convert string into an array
    let final = [];
    for (let word of nArr) {
        let nsring = word.charAt(0).toUpperCase() + word.slice(1);
        final.push(nsring);
    }
    return final.join(' '); // how to convert array into string..
}
;
