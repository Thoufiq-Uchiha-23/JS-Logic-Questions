// upper Pyramid

// let n = 5;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     document.write('&nbsp; ')
//   }
//   // printing stars
//   for (let k = 0; k < 2 * i - 1; k++) {
//     document.write('*')
//   }
//   document.write("<br>")
// }

/*
    *
   ***
  *****
 *******
*********
*/

let n = 5;

for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i;j++){
    document.write("&nbsp ")
  }
  for(let k=1; k<= 2 * i - 1; k++){
    document.write("*")
  }
  document.write("<br>")
}