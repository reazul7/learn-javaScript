// ************ lecture-5 First Code of JS ************
console.log("Hello world");
console.log(0.459459);

console.log("My birth year is " + 1998 + ".");




// ************ lecture-6 Variables ************
var favoriteClubName = "Real Madrid";
var laLigaWin = 35;
var championsLeagueWin = 14;

console.log("My favorite football club name is" + " " + favoriteClubName);
console.log(favoriteClubName + " won La Liga trophy " + laLigaWin + " times and Champions League Trophy " + championsLeagueWin + " times");




// ************ lecture-7 Basic Numbers ************
var stringToNumber = Number('45.95646');

var newDigit = parseFloat(stringToNumber + 1);
var newDigit2 = parseInt(stringToNumber + 1);

console.log(newDigit);
console.log(newDigit2);
console.log(1/0);
console.log('gg' * 1);




// ************ lecture-12 Null & Undefined ************
var valueNotDefined;
var valueDefinedButUnknown = null;

console.log(valueNotDefined, valueDefinedButUnknown, null);



// ************ lecture-14 Octal and Hexadecimal Numbers ************
var hexadecimalNumber = 0x45fa; //add 0x before hexadecimal number
var octalNumber = 01545; //add 0 before octal Number

console.log(hexadecimalNumber, octalNumber);
// Ans: 17914, 869
