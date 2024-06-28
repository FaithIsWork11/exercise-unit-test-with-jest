

test('fromDollarToYen should convert USD to JPY correctly', () => {
    const { fromDollarToYen } = require('./app.js');
    const result = fromDollarToYen(100);
    // 100 USD -> 93.46 EUR -> 14621.9 JPY
    expect(result).toBeCloseTo(14626.1682, 2);
});
test('fromYenToPound should convert JPY to GBP correctly', () => {
    const { fromYenToPound } = require('./app.js');
    const result = fromYenToPound(10000);
    // 10000 JPY -> 63.94 EUR -> 55.63 GBP
    expect(result).toBeCloseTo(55.63, 2);
});










