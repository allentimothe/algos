function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0;
  
  for(let i = 0; i < arr.length; i++){
     sum1 += arr[i][i] - arr[i][(arr.length - 1) - i];
     
  }
  
  return Math.abs(sum1);
}

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below: