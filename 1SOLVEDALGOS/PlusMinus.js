function plusMinus(arr) {
  // Write your code here
  let zeroOutput = 0;
  let posOutput = 0;
  let negOutput = 0;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
          posOutput ++;
      } else if(arr[i] < 0){
          negOutput ++;
      } else {
          zeroOutput ++;
          }
      }
  
  console.log((posOutput / arr.length).toFixed(6));
  console.log((negOutput / arr.length).toFixed(6));
  console.log((zeroOutput / arr.length).toFixed(6));
}

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.