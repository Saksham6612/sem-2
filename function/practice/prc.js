// function declaration
function cal(quantity) {
    let price = 500;
    let total = quantity * price;

    if (quantity >= 10) {
        total = total - (total * 0.10);
    }

    total = total + (total * 0.18);
    return total;
}

console.log(cal(12));

//Function expression
const cal = function (quantity) {
    let price = 500;
    let total = quantity * price;

    if (quantity >= 10) {
        total -= total * 0.10;
    }

    total += total * 0.18;
    return total;
};

console.log(cal(8));