function triangleType(number1, number2, number3) {
    if (number1 == number2 && number2 == number3) return 'equilateral'
    if (number1 == number2 || number2 == number3) return 'isosceles'
    return 'scalene'
}

console.log(`The triangle is ${triangleType(5, 5, 5)}`)