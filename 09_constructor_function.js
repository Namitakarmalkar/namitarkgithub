function Person(fullName,city,age,gender){
    this.fullName=fullName;
    this.city=city;
    this.age=age;
    this.gender=gender;
}
Person.prototype.country="India";
let sachin=new Person("Sachin Tendulkar","Surat",45,"Male");
let sharma=new Person("Rohit Sharma","Pune",32,"Male");
console.log(sachin.country);
console.log(sharma.country);

console.log(sharma);
let mystring="DEVELOPER";
