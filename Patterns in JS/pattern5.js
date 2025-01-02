// for (let i = 1; i <= 4; i++) {
//   for (let j = 4; j >= i; j--) {
//     document.write("&nbsp;");
//   }
//   for (let k = 1; k <= i; k++) {
//     document.write(k + " ");
//   }
//   document.write("<br>");
// }

/*
    1
   1 2
  1 2 3
 1 2 3 4
*/

for (let i = 1; i <= 4; i++) {
  for (let j = 4; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.write(k + " ");
  }
  document.write("<br>");
}
