function Person(fullName,city,age,gender){
    this.fullName=fullName;
    this.city=city;
    this.age=age;
    this.gender=gender;
}

let personAnil=new Person("Anil Mohite","Pune",31,"Male");
let personBill=new Person("Bill Gates","USA",67,"Male");
const array=[personAnil,personBill];


for (let index = 0; index < array.length; index++) { 
    const element = array[index];
    if(element.age>=50){
        console.log(`${element.fullName} ${element.city}   ${element.age}  ${element.gender}`);
    }
    
}
