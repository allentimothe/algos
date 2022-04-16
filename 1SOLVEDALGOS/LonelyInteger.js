function lonelyinteger(a) {
  // Write your code here
  a.sort();
  for(let i = 0; i < a.length; i++){
      if(a[i] !== a[i + 1] && a[i] !== a[i - 1]){
          return a[i];
  }  
  }  
}

// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is 4.