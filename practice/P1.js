
//using tenp var or third var

var a="Namita";
var b="Shrungare";
console.log(`before  swap ${a},  ${b}`);

var temp = a ;
var a = b ;
var b = temp ;
console.log(`after swap ${a},  ${b}`);    


console.log("_____________________________without using  third var_______________________________");
var a = 100;
var b =200;
 
var a= a+b;  // a=100n b=200    a=300
var b = a-b;  // a =200  b=100
var a = a-b; //300-200=100


console.log(a,b)
console.log("_____________________________without using  third var_______________________________");

// var a = 100;   
// var b =200;
 
// var b= a;  // a=100n b=200    a=300
// var a = b-a;  //  a=200
// var b = b; //300-200=100


// console.log(a,b)

var str ='TCS the Indian IT Giant Company';

var reverse_str = str.split("").reverse().join("");
console.log(reverse_str);

var strLower= str.toLowerCase();
var count=0;
let result=new Set();


for (let index = 0; index < str.length; index++) {
    let char=strLower.charAt(index)
    if (char=="a" ||char=="e"||char=="i"||char=="o"||char=="u") {
        result.add(char);
     console.log(char);   
     count++;
     
    }

}
console.log(result);
console.log(count);

console.log("_____________________________without using  third var_______________________________");


for (let index = 0; index < str.length; index++) {
  var char=str.charAt(index);
if (index%2==0) {
    console.log(char);
}    
}
    
console.log("_____________________________Odd Number_______________________________");
for (let index = 0; index < str.length; index++) {
  var char=str.charAt(index);
  if(index%2!==0){
    console.log(char);
  }
    
}




    
    
