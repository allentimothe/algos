// Don't just start off solving the problem. Spend time setting up the steps and ask questions.

// write a function which takes in a string and returns counts of each character in the string...


function charCount(str) {
  // Make an object
  const result ={};
  // loop over string for each character
  for(var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase() // created a variable for the loop.. stored
    //if the char is a number/ letter AND is a key in object, add one to count
    if(result[char] > 0) {
        result[char]++; // if the result [of char](brackets means "of")
        
  // if the char is a number/ letter AND not in object, add it to object and set value to 1
    } else {
      result[char] = 1; 
    };
  }
    
    // if character is something else (space, period, etc.) dont do anything 
  // return object at end
  return result;
}

console.log(charCount("HELLO"));