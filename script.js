console.log("JavaScript is connected");
let ticker = "ES";
let price = 6000;
console.log(ticker);
console.log(price);
price = 6010;
console.log(price);
const siteName = "Futures Market Pulse";
console.log(siteName);
const tickerSymbol ="NQ";
let currentPrice = 20000;
const marketOpen = true;
console.log(typeof tickerSymbol);
console.log(typeof currentPrice);
console.log(typeof marketOpen);
const entryPrice = 6000;
const exitPrice = 6010;
const pointsGained = exitPrice - entryPrice;
console.log(pointsGained);
function showWelcomeMessage() {
    console.log("Welcome to the Futures Market Pulse");
}
showWelcomeMessage();
function showTicker(tickerSymbol) {
    console.log(tickerSymbol);
}
showTicker("ES");
showTicker("NQ");
function calculatePoints(entryPrice, exitPrice) {
    const pointsGained = exitPrice - entryPrice;
    return pointsGained;
}
const tradeResult= calculatePoints(6000, 6010);
console.log(tradeResult);
if (tradeResult > 0) {
    console.log("Winning trade");
} else {
    console.log("Losing trade");
}
function addNumbers (a, b) {
    return a + b;
}
console.log(addNumbers(1, 2));
function subtractNumbers (a, b) {
    return a - b;
}
console.log(subtractNumbers(2, 1));
function multiplyNumbers (a, b) {
    return a * b;
}
console.log(multiplyNumbers(2, 3));
function divideNumbers (a, b) {
    return a / b;
}
console.log(divideNumbers(6, 3));
function describeTrade(result) {
    if (result > 0) {
        return "Winning trade";
    } else if (result < 0) {
        return "Losing trade";
    } else {
        return "Break-even trade";
    }
}
console.log(describeTrade(25));
console.log(describeTrade(-10));
console.log(describeTrade(0));
