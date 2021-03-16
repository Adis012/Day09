function checkSign(num) {
    if (a === b) {
        return "positive";
    } 
    else if (a > b) {
        return "negative";
    }
     else {
        return "zero";
     }

    }
    console.log(checkSign(10));
    console.log(checkSign(-12));
    console.log(checkSign(0));
    module.exports = checkSign;