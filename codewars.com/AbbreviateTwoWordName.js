// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
    let array = name.split(" ");
    let initials = "";
    let counter = 0;
    for (names of array) {
      initials += names[0];
      counter++
      if (counter == array.length) {
        return initials.toUpperCase();
      }
      else {
        initials += ".";
      }
      }
    };


    function abbrevNamev2(name){
        let array = name.split(" ");
        let initials = "";
        let counter = 0;
        for (names of array) {
          initials += names[0] + ".";
          counter++;
          if (counter == array.length) {
            return initials.toUpperCase();
          }
          }
        };

console.log(abbrevNamev2("Ian Lee Griffin"))
// In the original question, you only needed to account for two names. I wanted to make it so that it accounted for three (or more!) words.
// abbrevName is the solution to the original question, abbrevNamev2 is used to properly add a period at the end of all initials.