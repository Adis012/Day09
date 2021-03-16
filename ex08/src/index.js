function logicalOrOperator(num) {
    if (num > 0) {
        return "No"    
    }
    if (num < 9) {
        return "No" 
    }
    return "Yes";

    if (num > 100 || num < 50) {
            return "No" 
    }
    return "Yes";
    
}

console.log(logicalAndOperator(0));
console.log(logicalAndOperator(9));
console.log(logicalAndOperator(20));
console.log(logicalAndOperator(23));
console.log(logicalAndOperator(30));
console.log(logicalAndOperator(31));
console.log(logicalAndOperator(105));

module.exports = logicalAndOperator;