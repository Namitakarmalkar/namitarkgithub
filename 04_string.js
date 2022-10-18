var greet="Good Morning";

console.log(greet);

var count=greet.length;
console.log(count);
console.log(greet.length);

var namita = greet.charAt(4);
console.log(namita);
console.log(greet.charAt(5));
console.log(greet.indexOf('o'));
console.log(greet.indexOf('Morning'));

console.log(greet.replace("Morning","evening"));

console.log(greet.includes("Mo"));

console.log(greet.includes("Mg"));

console.log(greet.substring(5,10));

console.log(greet.slice(5,8));

var studentList="Ganpatrao,Nandu,Aniket,Aniket";
var splitResult=studentList.split(" ");
console.log(splitResult);

var impQuote=`"do or Die" this attitude is imp for this training`;
console.log(impQuote);

var fname="Namita";
var lname="Shrungare";
console.log(`fname : ${fname} lname : ${lname} `);