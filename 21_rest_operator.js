`use strict`
function display(Name,age,...myName){
    console.log(myName,age);
    console.log(typeof myName);
}
display("Anil,",31,"city",true);

function divide(x,y=1){
    console.log(x/y);
}
divide(10);