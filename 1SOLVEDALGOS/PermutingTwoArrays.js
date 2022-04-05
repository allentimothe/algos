function twoArrays(k, A, B) {
  // Write your code here
  A.sort((a,b)=> a-b);
  B.sort((a,b)=> b-a);
  for(let i = 0; i < A.length; i++){
      if(A[i] + B[i] < k)return "NO";    
      } 
          return "YES";
}

// There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

// There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.