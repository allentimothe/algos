// MULTIPLE POINTERS

// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a ceratin condition

// Very efficient for solving problems with a minimal sopace complexity as well

// EXAMPLE
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// NAIVE SOLUTION

function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+l; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}