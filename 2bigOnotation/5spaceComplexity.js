// RULE OF THUMB

// Most primitives (booleans, numbers, undefined, null) are constant space.
// Strings require O(n) space(where n is the string length)
// Reference type are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

//===================================================
//focusing on space complexity

// function sum(arr) {
//   let total = 0;
//   for(let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }


//function below returns an array with 3 items. But each item has been doubled
function double(arr) {
  let newArr= []; // Empty brackets make a new array
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([1,2,3]));