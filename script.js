// The first question is whether the entered string is a data string or not

function isString(string1) {
    return typeof string1 === "string";
}
let str1 = "rahele shirazi"
console.log(isString(str1)); // true

//---------------------------------------------------------------------------------------------------
//   The second question is where the desired string is located in the text
function findPosition(strr1, str2) { // define function variable Find the right time
    const index = strr1.indexOf(str2);
    if (index === -1) {
        return "The second string was not found in the first string.";
    } else {
        return `The second string is in the first string at position ${index}.`; //It returns the index number on which index it is
    }
}
// enters Entrance variable
const strr1 = "rahele shirazi";
const str2 = "shirazi";
// // display uncle
console.log(findPosition(strr1, str2));
//---------------------------------------------------------------------------------------------------

// The third question asks how many strings there are and their authenticity
function findCharCountAndPositions(str) {
    const charCounts = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!charCounts.hasOwnProperty(char)) { //It checks whether those letters exist or not
            charCounts[char] = {
                count: 1,
                positions: [i],
            };
        } else {
            charCounts[char].count++;
            charCounts[char].positions.push(i);
        }
    }
    return charCounts;
}

const str = "i am rahele shirazi"; //define variable string 

console.log(findCharCountAndPositions(str));//display uncle and tammaamm tammaam😁





