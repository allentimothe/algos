function pangrams(s) {
  // Write your code here
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let s1 = s.replace(/\s/g,"");
  s1 = s1.toLowerCase();
  let s2 = s1.split("");
  let s3 = [...new Set(s2)];
  let s4 = s3.sort();
  let s5 = s4.join("");
  if(s5 === alphabet){
      return "pangram";
  } 
      return "not pangram";
   
  
}

// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.