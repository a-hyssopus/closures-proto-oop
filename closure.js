// create a function which returns a module with the followings accessible functions:
// sum, subtract, multiply, divide,
// that will perform the operations over 2 values/
// One of the values should be passed as a parameter to the module function, the other one should be a local variable

function getMathModule(x) {
    let y = 2;
    function createModule() {
        return {
            sum() {
               return x + y
            },
            subtract() {
                return x - y
            },
            multiply() {
                return x * y
            },
            divide() {
                return x / y
            },
        }
    }
    const module = createModule();
    return module;
}


console.log(`Sum: ${getMathModule(10).sum()}`);
console.log(`Subtract: ${getMathModule(10).subtract()}`);
console.log(`Multiply: ${getMathModule(10).multiply()}`);
console.log(`Divide: ${getMathModule(10).divide()}`);