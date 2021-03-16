const comparisonToEqual = require("../../ex06/src");

function compareDifferentValues(m, n) {
    return "Equal";
    return "Not equal"
console.log(compareDifferentValues(m, n));
}

console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
module.exports = compareDifferentValues;