// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let counter = 0;
    let vowels = ["a", "e", "i", "o"]
    for (let i = 0; i < str.length + 1; i++) {
      if ((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")) {
        counter++;
      }
    }
    return counter;
  }



function getVowelCount(str) {
    let counter = 0;
    let test = str.match(/[aeiou]/ig).length;
    console.log(test);
}


getVowelCount("Testing nEw vowel count function");