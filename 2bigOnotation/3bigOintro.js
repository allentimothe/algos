// Big O Notation is a way to formalize "fuccy counting"
// It allow su to talk formally about how the runtime of an algorithm grows as the inputs grow...

// Big O Definition

// Describes the relationship between the INPUT and the RUNTIME
//==================================================================
// function countUpAndDown(n) {
//   console.log("Going up!");
//   for(let i = 0; i < n; i++) { //
//     console.log(i);
//   }
//   console.log("At the top!\nGoing down...");
//   for(let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("Back Down Bye");
// }

// console.log(countUpAndDown(10));
//==================================================================
// NESTED LOOPS
function printAllPairs(n) {
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
      console.log(i,j);
    }
  }
}

console.log(printAllPairs(20));

