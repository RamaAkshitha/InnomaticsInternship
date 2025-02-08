function atmWithdrawal(balance,amount,pin,enteredpin) {
    if (enteredpin!==pin){
        return "Incorrect PIN";
    }
    if (amount>balance){
        return "Insufficient funds";
    }
    balance-=amount;
    return `Withdrawal successful. remaining balance: ${balance}`;
}
let balance = 7000;
let pin = 1997;
console.log(atmWithdrawal(balance, 1265, pin, 1997));
console.log(atmWithdrawal(balance, 6000, pin, 1234)); 
console.log(atmWithdrawal(balance, 1200, pin, 1111));  