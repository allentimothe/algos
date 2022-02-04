// Given an array of integers arr and an integer k, find the kth Largest element

// EXAMPLE
// input:
// arr = [4,2,9,7,5,6,7,1,3]
// k = 4
// output: 6
// explanation
//  1st largest element is 9
//  2nd larget elemeent is 7
//  3rd larget elemeent is 7
//  4th larget elemeent is 6


 //===========================
 // FIRST SOLUTION

// def kth_largest(arr, k)
  // for i in range(k-1)
    // arr.remove(max(arr))
  // return max(arr)

  //===========================
  // SECOND SOLUTION

  // def kth_Largest(arr, k) 
    // n = len(arr)
    // arr. sort()
    // return arr[n-k]
