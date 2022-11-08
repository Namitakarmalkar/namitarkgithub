const person={
    name:"Mohit",
    rollNo:1234
}
let student={
    city:"Pune"
}
person.street="AS CLUB";

console.log(person);

/*const arrayNumbers=[2,4,5,6,7];
Object.freeze(arrayNumbers);
arrayNumbers.push(99);
console.log(arrayNumbers);
*/

let studentClone=Object.assign({},student);
studentClone.name="Mohit Sharma";
console.log(studentClone);
console.log(student);