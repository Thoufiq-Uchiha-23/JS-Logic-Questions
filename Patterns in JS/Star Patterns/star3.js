let n = 5;
for (let i = 1; i <= n; i++) {
  // Print spaces
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp; ");
  }
  // Print stars
  for (let k = 1; k <= i; k++) {
    document.write("*");
  }
  document.write("<br>");
}

/*
    *
   **
  ***
 ****
*****
*/