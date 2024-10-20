function checkPalindrome(string) {
  // first split the string
  const arrayValues = string.split("");

  // then reverse the string
  const reverse = arrayValues.reverse();

  // now join the reverse string
  const reversedString = reverse.join("");

  // check the condition by comparing string and reversedString
  if (string === reversedString) {
    console.log("It is a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}

const string = "malayalam";

checkPalindrome(string);
