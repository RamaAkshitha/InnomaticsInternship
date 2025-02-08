function calculateticketprice(age,showTime) {
    let basePrice=12;
    let discount=0;
    if (showTime<17){
        discount=0.2;
    }
    if (age>60){
        discount=Math.max(discount,0.3);
    } else if (age < 12) {
        discount=Math.max(discount,0.4);
    }
    
    let finalPrice=basePrice*(1-discount);
    return `Final ticket price: $${finalPrice.toFixed(2)}`;
}
console.log(calculateticketprice(30,23));
console.log(calculateticketprice(65,16));
console.log(calculateticketprice(1,20));
console.log(calculateticketprice(10,19));