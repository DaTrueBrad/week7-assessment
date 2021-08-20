//! Pangram Sentence Problem

function isPangram(str) {
    str = str.toLowerCase().replace(/([^a-z])+/g,'')
    let letters = {}
    for (let i = 0; i < str.length; i++) {
        if (letters.hasOwnProperty(str[i])) {
        letters[str[i]]++
        } else {
        letters[str[i]] = 1
        }
  }
    if(Object.keys(letters).length === 26) {
        return true
    } else {
        return false
    }
}

console.log(isPangram("Sphinx of black quartz, judge my vow"))

//! This code is taken in part from one of the toy problems on thursday's assignment. The first part of the funciton is taking the string, forcing it lowercase, and then using regex will compare and replace letters that don't exist in the string with a space. It will then loop over each character in the string, and if it has already been logged as an object, it will increase the key.value. If it heasn't been logged as an object, it will create an object and set the value to 1. In total, there can never be more than 26 characters, so if the length of the object is 26, then we know we have a panagram, which brings me to the second portion of my code. The simple if statement. We chack the objectt length against a strict number of 26, and if it matches, we return true, it is a panagram. If it doesn't strict equal 26, then we know it is not a panagram.

//! Time complexity: O(n)
//! Space complexity: O(log n)