var givenstring ="I Love Javascript";
var totalchar=givenstring.length;

for(let index=0; index<totalchar; index++)
{
    if(index%2==0){
        var charat =givenstring.charAt(index);
      //  console.log(charat);
    }
}
console.log("vowelschar--------------------");
var givenString ="I Love Javascript";
for(let index=0; index<givenString.length; index++)
{
   
   if(index%2==0){
       // if(index%2!=0){
        var char =givenstring.charAt(index);
         if(char=="a" || char=="e" || char=="i" )
         {
            console.log(char);
         }
    }
}
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

console.log("count the total number vowels using includes()for string-"Good Morning IT champ");