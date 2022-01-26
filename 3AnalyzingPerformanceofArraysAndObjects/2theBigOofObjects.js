// Objects work when you don't need order and speed.

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

// Big O of Object Methods
//Object.keys - O(N)
//Object.values - O(N)
//Object.entries - O(N)
//hasOwnProperty - O(1)

//console.log(Object.keys(instructor));
// Output -- [ 'firstName', 'isInstructor', 'favoriteNumbers' ]. O(N)

//console.log(Object.values(instructor));
// Output -- [ 'Kelly', true, [ 1, 2, 3, 4 ] ]

//console.log(Object.entries(instructor));
// Output -- 
// [
//   [ 'firstName', 'Kelly' ],
//   [ 'isInstructor', true ],
//   [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
// ]

//console.log(instructor.hasOwnProperty("firstName"));
// Output is a boolean -- true