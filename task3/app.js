// with methods
var n=123;
function reverse(){
  var reversed = Number(n.toString().split('').reverse().join(''));
  console.log(reversed); 
}
reverse();

// without methods
function reverseWithoutMethods() {
var n = 12345;
var reversed = 0;
while (n > 0) {
  let digit = n % 10;
  reversed = reversed * 10 + digit;
  n = Math.floor(n / 10);

}
console.log(reversed); 


}
reverseWithoutMethods();