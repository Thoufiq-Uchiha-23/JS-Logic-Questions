// let count = 1;
// for (let i = 1; i <= 4; i++) {
//   for (let j = 4; j >= i; j--) {
//     document.write("&nbsp;");
//   }
//   for (let k = 1; k <= i; k++) {
//     document.write(count + " ");
//     count++
//   }
//   document.write("<br>");
// }

/*
    1
   2 3
  4 5 6
 7 8 9 10
*/

let count = 1;

for (let i = 1; i <= 4; i++) {
  for (let j = 4; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.write(count + " ");
    count++;
  }
  document.write("<br>");
}
