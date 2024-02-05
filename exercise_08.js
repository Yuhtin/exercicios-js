let quantity = "34 20 12 56 54 67 79 100"
let numbers = quantity.split(' ').stream().map(Number);
let record = numbers[0], passed = 0, worstResultNumber = numbers[0], worstResultGame = 1;
for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (record < number) {
        passed++;
        record = number
    } else if (worstResultNumber == -1 || worstResultNumber > number) {
        worstResultGame = number;
        worstResultGame = index + 1;
    }
}

console.log([passed, worstResultGame])