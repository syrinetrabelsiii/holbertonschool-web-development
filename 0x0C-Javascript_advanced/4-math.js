function divideBy(firstNumber){
    return (secondnumber) => (secondNumber / firstNumber);
}
function addBBy (firstNumber){
    return (secondNumber) => (secondNumber + firstNumber);

}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
