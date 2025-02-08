function calculateFinalAmount(orderAmount){
    let discount=0;
    let shipping=0;
    if (orderAmount>1000){
        discount=0.2*orderAmount;
    } else if (orderAmount>=500){
        discount=0.1*orderAmount;
    }
    let discountedAmount=orderAmount-discount;
    if (discountedAmount<50){
        shipping=10;
    }
    let finalAmount=discountedAmount+shipping;
    return `Final amount:$${finalAmount.toFixed(2)}`;
}
console.log(calculateFinalAmount(452));
console.log(calculateFinalAmount(871));
console.log(calculateFinalAmount(1286));
console.log(calculateFinalAmount(30));
