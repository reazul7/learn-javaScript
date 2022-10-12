// ************ lecture-26 JS Ternary Operators ************
// test by if else
var n = 101;
var result = "";
if (n % 2 == 0) {
  result = "Even from if-else condition";
} else {
  result = "Odd from if-else condition";
}

console.log(result);

// its time to ternary operation
result = n % 2 == 0 ? "Even from Ternary Operators" : "Odd from Ternary Operators";
console.log(result);
