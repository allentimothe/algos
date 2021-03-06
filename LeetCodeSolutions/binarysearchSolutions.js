// 278. First Bad Version
// Easy

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1

var solution = function(isBadVersion) {
  return function(n) {
      let left = 0;
      let right = n;
      
      while (left <= right) {
          const mid = Math.floor(left + (right - left) / 2);
          
          if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
              return mid;
          }
          
          if (!isBadVersion(mid)) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  };
};
//====================================================================================
//====================================================================================
//====================================================================================
// 35. Search Insert Position
// Easy


// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid;
  
  while(left <= right) {
      mid = Math.floor((left + right) / 2)
  
      if(nums[mid] === target) {
    return mid
      } else if(target < nums[mid]) {
          right = mid - 1
      } else if(target > nums[mid]) {
          left = mid + 1
      }
  }
  return left
};
