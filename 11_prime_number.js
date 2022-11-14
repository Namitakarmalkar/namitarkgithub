function primenumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
        if(numberToCheck%index==0){
            return false;
        }
        
    }
    return true;
}
console.log(primenumber(11));