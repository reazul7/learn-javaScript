// ************ lecture-25 JS Logical Operators ************
var a=10
var b=20
var c=30
var d=40

if (a>b && c>d){
  console.log("a & b big_show")
} else if (a<b && c<d){
  console.log("b & d big_show")
} else {
  console.log("dure giya mor")
}

if (a>d || c>d) {
  console.log("a or c big_show")
}else if (a<d || c<d) {
  console.log("b or d big_show")
} else {
  console.log("dure giya morte bolci")
}