function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = math.floor((start + end) / 2);
  while(arr[middle] !== elem) {
    if(elem < arr[middle]) end = middle - 1;
     else start = middle + 1;
      middle = math.floor((start + end) / 2);
  }
    return arr[middle] === elem ? middle : -1;
}
    
  
