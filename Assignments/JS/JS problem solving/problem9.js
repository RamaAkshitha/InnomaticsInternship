function calculateElectricitybill(units,timeOfDay) {
    let rate;
    if (units<=100){
        rate=5;
    } else if (units<=300){
        rate=4;
    } else {
        rate=3;
    }
    if (timeOfDay>=20||timeOfDay<8){
        rate*=1.1;
    }
    let totalBill=units*rate;
    return `Total electricity bill: $${totalBill.toFixed(2)}`;
}
console.log(calculateElectricitybill(120,15));
console.log(calculateElectricitybill(50,10));
console.log(calculateElectricitybill(245,21));
console.log(calculateElectricitybill(550,7));
console.log(calculateElectricitybill(1000,10));