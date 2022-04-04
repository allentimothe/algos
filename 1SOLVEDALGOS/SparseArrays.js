//matches string elements and pushes to counter

function matchingStrings(strings, queries) {
  // Write your code here
  const mem = {};
  for(const string of strings) mem[string] = (mem[string] || 0) + 1;
  return queries.map(query=> mem[query] || 0);
}

// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example



// There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .