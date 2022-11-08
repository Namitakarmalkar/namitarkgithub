let arrayOfNumbers=[1,3,7,8,9,3,7];
arrayOfNumbers[4]=11;
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
let totalElements=arrayOfNumbers.length-1;
    for (let index = totalElements; index>=0;  index--) {
        const element = arrayOfNumbers[index];
        console.log(element);
        
    }

    let arrayOfNumbers1 = [1,3,7,8,9,3,7];
    console.log(arrayOfNumbers1);
    arrayOfNumbers1.unshift(5);
    arrayOfNumbers1.unshift(0,99,77,66);
    console.log(arrayOfNumbers1);

    console.log("=========slice()============");
    let arrayOfNumbers2=[1,3,7,8,9,3,7];
    let sliceElements=arrayOfNumbers2.slice(2);
    console.log(sliceElements);

    console.log("=========splice()============");
    let arrayNumbers2=[1,3,7,8,9,3,7];
    console.log(arrayNumbers2);
    let spliceElements=arrayOfNumbers2.slice(4);
    console.log(spliceElements);
    console.log(arrayNumbers2);



