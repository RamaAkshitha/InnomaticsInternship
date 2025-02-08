function applyCoupon(orderAmount,coupon1,coupon2) {
    if (coupon1&&coupon2) {
        return "Error:Both coupons cannot be used together";
    }
    let finalAmount=orderAmount;
    if (coupon1=="DISCOUNT10"||coupon2=="DISCOUNT10") {
        if (orderAmount > 500) {
            finalAmount *= 0.9;
        }
    } else if (coupon1=="FREESHIP"||coupon2=="FREESHIP") {
        if (orderAmount>200){
            return `Final price: $${finalAmount.toFixed(2)} (Free Shipping)`;
        }
    }
    return `Final price: $${finalAmount.toFixed(2)}`;
}
console.log(applyCoupon(820, "DISCOUNT10", "FREESHIP"));
console.log(applyCoupon(610, "DISCOUNT10", null));
console.log(applyCoupon(350, null, "FREESHIP"));
console.log(applyCoupon(100, "FREESHIP", null));