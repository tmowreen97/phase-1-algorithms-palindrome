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

/* 
  Add your pseudocode here
  .reverse() is a method that reverses the elements in an array.
  so first we need to turn the string into an array.
  then reverse it, turn it back into a string.
  then we can see if it is still equal to the original word. 
  if it is, the result is true, if not it's false


/*
  Add written explanation of your solution here
  this works! 
  so word.split("") turns the word into an array.
  then create another variable where we reverse the array with .reverse() and turn it back into a string with .join("")
  then use an if statement to validate whether it is a palindrome, which is if the reversed word is equal to the original word.
  if its true, it returns true.
  if false, it returns false.

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
