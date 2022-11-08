console.log("Revers String --------------------");
var myName="Namit"
// 10 to 0
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
   
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);

console.log("count the total number vowels using includes() for string"Good Morning IT Champ"");
var mystring="Good Morning IT Champ";
var vowels="aeiou";
for(let index=0; index<mystring.length;index++){
    const element=array[index];
    var char=mystring.charAt(index);
    var isAvailable=vowels.includes(char);
    console.log(char,isAvailable);
}