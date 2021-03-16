function logicOrder(num) {
    if (num < 5) {
        return "Less than five";
    } else if (num < 10) {
        return "Less than ten";
    } else {
        return "Greater than or equal to ten";
    }

}

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));

module.exports = logicOrder;