function calculategrade(marks,attendance){
    if (attendance>90){
        marks+=5;
    }
    if (marks>=90){
        return "A";
    } else if (marks>=80){
        return "B";
    } else if (marks>=70){
        return "C";
    } else if (marks>=60){
        return "D";
    } else {
        return "F";
    }
}
console.log(calculategrade(90,93));
console.log(calculategrade(79,89));
console.log(calculategrade(65,75)); 
console.log(calculategrade(83,90));
console.log(calculategrade(38,60));