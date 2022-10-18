function maleMargEligebility(gender,age,boyname){
    var result= gender="Male" && age>=21 
    ? ` you are eligible for Marriage ` :
     `Not eligible for marrage `
     console.log(`Hey  ${boyname} ${result}`);
 
 }
 
 maleMargEligebility("Male",25,"Billgates");
 maleMargEligebility("male",17,"Stew jobs");
 console.log("----------------------------------------------");
 
 function femaleMargEligibility(gender,age,girlname){
     if(gender="Female", age>=18){
         console.log(`Hey  ${girlname} you are eligible for Marriage`);  
 
     }else{
         console.log(`Hey  ${girlname} you are  not eligible for Marriage`);  
  }
 }
 
  femaleMargEligibility("Female",16,"Jenifer");
  femaleMargEligibility("Female",27,"Malinda Gates");
  console.log("----------------------------------------------");
 