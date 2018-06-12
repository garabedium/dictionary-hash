// Example dictionary:
let dictionary = {
  "ooz":["zoo"],
  "not":["not","ton"],
  "fox":["fox"],
  "abd":["bad","dab"],
}

const addStringToDictionary = (str) => {
  str = str.split('').sort().join('')

  if (!dictionary[str]){
    dictionary[str] = []
    // sortDictionary()
  }

}

// const sortDictionary = () => {
//   return Object.keys(dictionary).sort().reduce....
// }

addStringToDictionary("lorem")
// console.log(dictionary);

console.log(dictionary);

// console.log(dictionary.abd);
// console.log("ton".split('').sort());
// Given a string
// Find all string combinations
// Check if each string is a valid word
// Sort string, add it to dictionary