console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

const arrayNumbers=[10,20,30,40,20,10];

arrayNumbers.forEach((currentValue)=>console.log(currentValue)
    
);
console.log("===== Traversing set using forEach() =====");
const setOfNumbers= new Set(arrayNumbers);
setOfNumbers.forEach((value)=>{
    console.log(value);
});