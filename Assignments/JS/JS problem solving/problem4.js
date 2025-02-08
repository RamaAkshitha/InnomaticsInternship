function trafficlightcontrol(density){
    switch (density){
        case "Heavy traffic":
            return "Green for 60 seconds";
        case "Moderate traffic":
            return "Green for 40 seconds";
        case "Light traffic":
            return "Green for 20 seconds";
        default:
            return "invalid density";
    }
}
console.log(trafficlightcontrol("Heavy traffic"));
console.log(trafficlightcontrol("Moderate traffic"));
console.log(trafficlightcontrol("Light traffic"));
console.log(trafficlightcontrol("No traffic"));