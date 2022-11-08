let person={
    "fullName":"Sachin Tendulkar",
    "city":"Mumbai",
    "age":42,
    "isMarried":true,
    city:"Mumbai",
    address:{
        street:"AS CLUB",
        pin_code:123456,
        city:"pune",
        state:"MH"
    },
    eat:function(){
        console.log("I am vegetarian");
    }
  
    }
    console.log(typeof person);

    person.fullName='Sachin Ramesh Tendulkar';
    person.pincode=123456;
    delete person.city;
    person.profession="Angular Developer"
    console.table(person);
   
    person.eat();


console.log(person.city);
console.log(person["age"]);
let city=person.city;

let personFullname=person.fullname;
console.log(personFullname); 
console.log("---------");
console.log(person.fullname);












