// Ask yourself these questions out loud when interviewing

// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you improve the performance of you solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?

// function charCount(str) {
//   var obj = {};
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if(/[a-z0-9]/.test(char)) { //   the following line is how to 
//                               // check if there are alpha numeric values
//                                // -- / [a-z0-9]/
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;1
//       };
//     }
//   }
//   return obj;
// }

function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {                                       
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount("Hello hi!"));

// This is a key line -- /[a-z0-9]/.test