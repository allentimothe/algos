// Arithmetic operations are constant
// Variable assignment is constant
// Accessing elements in an array (by index) or object (by key) is constant.
// In a loop, the comlexity is the length of the loop times the complexity of whatever happens inside of the loop ((Nested loops))


// Log At Least 5.... At a minimun will print 5 numbers... Loop will go to either 5 or N
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5,n); i++) {
    console.log(i);
  }
}

console.log(logAtLeast5(2));

function logAtMost5(n) {
  for(var i = 1; i <= Math.min(5,n); i++) {
    console.log(i);
  }
}

console.log(logAtMost5(30));