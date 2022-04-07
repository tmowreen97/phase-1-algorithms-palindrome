function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("")
  let reversed = array.reverse().join("")
  if (reversed === word){
    return true
  }
  else {
    return false
  }
}
let word = 'toy'
isPalindrome(word)

/* 
  Add your pseudocode here
  .reverse() is a method that reverses the elements in an array.
  so first we need to turn the string into an array.
  then reverse it and see if it is still equal to the original word. 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
