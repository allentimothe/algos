// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  // Write your code here
  let amPm = s.charAt(8);
  let newHour = "";
  if(amPm == "A"){
     newHour = s.substr(0,8);
     if(newHour.charAt(0) == 1 && newHour.charAt(1) == 2){
      newHour = parseInt(s.substr(0,2)) - 12;
      newHour += "0" + s.substr(2,6);   
      
     }    
  } else if (amPm == "P"){
      newHour = parseInt(s.substr(0,2)) + 12;
      newHour += s.substr(2,6); 
              if(newHour.charAt(0) == 2 && newHour.charAt(1) == 4){
      newHour = (parseInt(s.substr(0,2)) - 12) + 12;
      newHour += s.substr(2,6); 
              }
  }
      return newHour;
}