function evenOdd(num){
    var evenOdd_var= num % 2 ==0 ? "EVEN":"ODD"
    console.log(`The number ${num} is ${evenOdd_var}.`);

}
evenOdd(47);
evenOdd(48);
evenOdd(97);
evenOdd(54);
console.log(`---------------------------------------------`);
 
function voteEligiblility(age){
    if(age>=18){
        console.log(`${age} you are eligible for vote.`);
    }else{
        console.log(`${age} you are not eligible for vote.`);

    }
} 
voteEligiblility(19);
voteEligiblility(25);
voteEligiblility(15);
voteEligiblility(49);
console.log(`---------------------------------------------`);

var str1="javaScript-ES6";
var str_len=str1.length;
if(str_len>10){
    console.log(`yes,"javaScript-ES6" this string contain more than 10 characters`);

}else{
    console.log(`No ,"javaScript-ES6" this string contain more than 10 characters`);


}
console.log(`---------------------------------------------`);

var str2="JavaScript Language";
var result=  str2.startsWith("Java")
console.log( `String start with "Java" ${result}`);
console.log(`---------------------------------------------`);



