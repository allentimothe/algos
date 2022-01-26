//1st solution
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(1000));

//==========================================================

//2nd solution
// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }
// 6 * (6+1)/2


// console.log(addUpTo(10000))

//==========================================================

//1st solution with timing function
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// let t1 = performance.now();
// addUpTo(100000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//==========================================================
//2nd solution with timing function // This algo is faster
function addUpTo(n) {
  return n * (n + 1) / 2; 
}


var  time1 = performance.now();
addUpTo(100000000);
var  time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// To run code in terminal for javascript type "node filename.js"