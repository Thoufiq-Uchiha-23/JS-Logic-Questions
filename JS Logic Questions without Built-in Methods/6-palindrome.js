// Code Example: Check if a String is a Palindrome

function isPalindrome(str) {
    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        // Compare characters from the start and end
        if (str[i] !== str[len - i - 1]) {
            return false; // Not a palindrome
        }
    }

    return true; // It's a palindrome
}

// Test cases
console.log(isPalindrome("madam"));    // Output: true
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("12321"));    // Output: true
console.log(isPalindrome("12345"));    // Output: false

// Code Example: Check if a Number is a Palindrome
function isNumberPalindrome(num) {
    let original = num; // Store the original number
    let reversed = 0;

    // Reverse the number
    while (num > 0) {
        let digit = num % 10;         // Get the last digit
        reversed = reversed * 10 + digit; // Build the reversed number
        num = Math.floor(num / 10);   // Remove the last digit
    }

    return original === reversed; // Compare original and reversed numbers
}

// Test cases
console.log(isNumberPalindrome(121));    // Output: true
console.log(isNumberPalindrome(12321));  // Output: true
console.log(isNumberPalindrome(12345));  // Output: false
console.log(isNumberPalindrome(1));      // Output: true
console.log(isNumberPalindrome(10));     // Output: false
