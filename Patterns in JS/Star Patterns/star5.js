// Diamond Pyramid

// let n = 5;

// Upper half of the diamond
// Do the upper pyramid as u learnt before
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp; ");
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// Lower half of the diamond
// Here just make the i loop decrement and the rest is same
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp; ");
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

// Diamond Pyramid

let n = 5

// upper pyramid
for(let i=1; i<= n; i++){
  for(let j=1; j<=n-i; j++){
    document.write("&nbsp ")
  }
  for(let k=1; k<= 2*i-1; k++){
    document.write("*")
  }
  document.write("<br>")
}

// lower pyramid
// just decrement i loop rest is same
for(let i=n-1; i >=1; i--){
  for(let j=1; j<=n-i; j++){
    document.write("&nbsp ")
  }
  for(let k=1; k<= 2*i -1; k++){
    document.write("*")
  }
  document.write("<br>")
}