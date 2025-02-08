function isEligibleforjob(age,experience,qualification){
    if (age<21||age>55){
        return "not eligible: age must be between 21 and 55";
    }
    if (experience<2){
        return "Not eligible: experience must be at least 2 years";
    }
    if (qualification!=="Bachelor's Degree"){
        return "not eligible: minimum qualification is a Bachelor's Degree";
    }
    return "Eligible for the job";
}
console.log(isEligibleforjob(29,3,"Bachelor's Degree"));
console.log(isEligibleforjob(33,1,"Bachelor's Degree"));
console.log(isEligibleforjob(40,5,"Degree"));
console.log(isEligibleforjob(27,5,"Bachelor's Degree"));