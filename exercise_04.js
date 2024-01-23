var calculateDivision = (number1, number2) => [number1 / number2, number1 % number2]

let result = calculateDivision(15, 5)
console.log(`Result: ${result[0]}`)
console.log(`Remainder: ${result[1]}`)