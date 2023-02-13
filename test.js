// let i
// for (i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0)
// }

let a = 100
function test () {
  console.log(a);
  a = 10
  console.log(a)
}

test()
console.log(a)