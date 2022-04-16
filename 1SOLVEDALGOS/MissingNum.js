function arrayNums(nums){
  nums.sort(); //n*logn
  
  let start = 0;
    for(let i = 1; i < nums.length; i++){//n
      if(nums[start] + 2 == nums[i]){
         return nums[start] + 1;
      }
      start++;
    }
}
console.log(arrayNums([2,1,7,4,5,3]));

/*
You have an array nums of size n, it has distinct integers between 1 to n+1. The array is missing a single integer in that series and we need you to find that item

Example 1:
Input: nums = [1,3,5,4], n=4
Output: 2

Example 2:
Input: nums = [2,1,7,4,5,3], n=6
Output: 6
*/

// Have an array of num 
// Sort array
// Search through the array
// find the single integer that is missing
// return missing number
//[1,3,4,5]
//nums[start] = 1
//nums[i] = 3