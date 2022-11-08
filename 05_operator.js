console.log(10+10);
console.log(10+100.23);
console.log(100-50);

var num1=200;
var num2=400;

var result=num1=num2;
console.log(`result is:${result}`);

var num1=200;
var num2=20;
var result=num1%num2;
console.log(`result is:${result}`);

console.log("============%module operator============" +11%2);

var incr=num1+1;
var incr=++num1;
var decr=--num1;
console.log(`${incr} ${decr}`);
console.log(`"=========++increment========== " ${incr} ${decr}`);

var num1=100;
var num2=50;
var num1=num1+num2;
num1+=num2;
console.log(`compound addition operator:+=${num1}`);

var num1=30;
var num2=60;
console.log("num1<num2===>",num1<num2);
console.log("num1>num2");
var num1=10;
var result=num1> 0 ?"positive":"negative";
console.log(result);