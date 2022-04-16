function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  
  let max = sum - arr[0];
  let min = sum - arr[arr.length - 1];


  console.log(min + " " + max);
}
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.