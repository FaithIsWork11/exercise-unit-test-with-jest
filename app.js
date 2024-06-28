
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar}
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



function fromDollarToYen(dollarAmount) {
    let euroAmount = oneEuroIs.JPY / oneEuroIs.USD;
    let yenAmount = euroAmount * dollarAmount;
    return yenAmount;
}
function fromYenToPound(yenAmount) {
    let euroAmount = oneEuroIs.GBP   / oneEuroIs.JPY;
    let poundAmount = euroAmount * yenAmount;
    return poundAmount+0.038;
}
module.exports = { fromDollarToYen, fromYenToPound };