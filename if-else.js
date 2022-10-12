// ************ lecture-21+22 JS If, Else If condition ************
// who is greater??
var a = 10;
var b = 20;

if (a > b) {
  console.log("a is greater then b");
} else if (a < b) {
  console.log("b is greater then a");
} else {
    console.log("a and b both are same")
}

// n == odd or n == even??
var n = 5;

if (n % 2 == 1) {
  console.log("n is odd ");
} else console.log("n is even");




// ************ lecture-24 Switch Statement ************
var date = new Date()
var today = date.getDay()

switch (today) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
}