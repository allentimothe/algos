var myStr = "I am a \"double quoted\" string" // put the "\" symbol in there

// ESCAPE SEQUENCES

/*
CODE OUTPUT

\'  = single quote
\"  = double quote
\\  = backslash
\n  = newline
\r  = carriage return
\t  = tab
\b  = backspace
\f  = form feed
*/

var mystr2 = "Firstline\n\t\\Secondline\nThirdLine"
console.log(mystr2)

// BRACKET NOTATION
// EXAMPLE
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// SETUP
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];