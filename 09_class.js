class Person{
    fullName
    city
    age
    gender
    constructor(myName, myCity, myAge,myGender){
        this.fullName=myName;
        this.city=myCity;
        this.age=myAge;
        this.gender=myGender;
    }
}
let Sachin= new Person("Sachin Tendulkar","Pune",45,"Male");
let rohit=new Person("Rohit Sharma","Mumbai",32,"Male");
console.log(Sachin);
console.log(rohit);

function show(arg1,arg2){
    console.log(arg1,arg2);
}
show(1,2);