var simpleFees = (initial, fees, time) => initial * (1 + fees) * time
var compoundFees = (initial, fees, time) => initial * (1 + fees) ** time

console.log(`Total with simple fees > ${simpleFees(1000, .15, 12).toFixed(2)}`)
console.log(`Total with compound fees > ${compoundFees(1000, .15, 12).toFixed(2)}`)