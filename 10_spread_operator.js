let person={
    name:"Mohit",
    age:31,
    city:"Pune"
}
console.log(person.name,person.age,person.city);
console.log(person);

let student={...person};

student.city-"Mumbai";
console.log(student.city,person.city);
console.log(student.age,person.age);

console.table(person);
console.table(student);