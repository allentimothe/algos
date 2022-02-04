// HOW RECURSIVE FUNCTIONS WORK

// Invoke the same function with a different input until you reach your base case

// BASE CASE
// Condition when the recursion stop

// COUNTDOWN FUNCTION

function countDown(num){
  if(num <= 0){
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}