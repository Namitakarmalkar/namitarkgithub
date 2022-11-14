function do_assignment(){
    console.log("I am Doing assignment and its done now...");
    copy_assignment();
}
function copy_assignment(){
    console.log("Hey bro..Thanks let me copy...");
    
}
do_assignment(copy_assignment);


function display(){
    console.log( "display function");
}
setInterval( display ,2000); 
setTimeout( display, 2000, 5000);