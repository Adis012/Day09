function inverseWhile() {
    var i = 0;
    while(i < 10) {
        console.log(i);
        i++;
    }
}
console.log(inverseWhile(5, 4, 3, 2, 1, 0));
module.exports = inverseWhile;