function chooseplan(plantype,wantstrainer,wantsdietplan) {
    if (plantype=="VIP") {
        return "VIP Plan includes gym, trainer and diet plan ($80/month)";
    } else if (plantype=="Premium") {
        if (wantsdietplan) {
            return "Invalid!! premiun plan includes personal trainer only";
        }
        return "Premium Plan includes gym and personal trainer ($50/month)";
    } else if (plantype=="Basic") {
        if (wantstrainer || wantsdietplan){
            return "Invalid!! basic plan has gym access only"
        }
        return "Basic Plan includes gym access only ($20/month)";
    } else {
        return "invalid";
    }
}
console.log(chooseplan("Basic", false, false));
console.log(chooseplan("Premium", true, true));
console.log(chooseplan("VIP", true, true));
console.log(chooseplan("Basic", true, true));