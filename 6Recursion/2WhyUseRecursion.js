// What is recursion 
// A process (a function) that calls itself

// Why do I need to care
// It's everywhere


// THE CALL STACK

// - It's a stack data structure - we'll talk about that later!
// - Any time a function is invoked it is placed (pushed) on the top of the call stack
// - When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)

// function takeShower(){
//   return "Showering!"
// }

// function eatBreakfast(){
//   let meal = cookFood()
//   return `Eating ${meal}`
// }

// function cookFood(){
//   let items = ['Oatmeal', 'Eggs', "Protein Shake"]
//   return items[Math.florr(Math.random()*items.length)];
// }

// function wakeUp(){
//   takeShower()
//   eatBreakfast()
//   console.log("OK ready to go to work!")
// }

// wakeUp()