function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    if (classType === "Business") baseFare += 200;
    if (classType === "First Class") baseFare += 500;
    if (luggageWeight > 20) baseFare += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) baseFare *= 0.85;
    else if (isSenior) baseFare *= 0.90;
    return `Final flight fare: $${baseFare.toFixed(2)}`;
}
console.log(calculateFlightFare("Economy",25,true,false));  
console.log(calculateFlightFare("Business",30,false,true)); 
console.log(calculateFlightFare("First Class",80,false,false));   