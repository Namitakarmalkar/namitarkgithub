var mynumber=8;
var myresult=mynumber%2==0?"EVEN":"ODD";
console.log(myresult);

var tcsEligiblityCheck=function(grade_score,hsc_score,ssc_score,candidate_name){
    console.log(grade_score>=70);
    var result=grade_score>=70||hsc_score>=80||ssc_score>=90
    ?`congrats${candidate_name}you are eligible fot TCS interview`
    :`unfortunately you are not eligible fot TCS interview`
    console.log(result);
}
tcsEligiblityCheck(80, 86, 90,"Mohit Sharma");
tcsEligiblityCheck(69,65,95,"Anil Pendse");