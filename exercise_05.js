var formatNumber = (number1) => {
    return number1.toFixed(2).replace('.', ',')
}

console.log(`Formatted number > R$${formatNumber(0.1 + 0.2)}`)