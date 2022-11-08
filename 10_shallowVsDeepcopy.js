let person={
    name:"Mohit",
    age:31,
    city:"Pune",
    address:{
        pin:411041,
        street:"Narhe jspm"
    }
}

console.log(typeof "10");
console.log("==========================");
console.log(person.name,person.age,person.city);
console.log(person);
let student=JSON.parse(JSON.stringify(person));