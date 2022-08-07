const obj1 = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}
const obj2 = {
    name: "Krishana",
    power: 2325,
    yuga: "Dwapar"
}
function calculateNamePower(obj) {
    var namePowerObj = obj.name.length * 35;
    return namePowerObj;
}
function calculateTotalPower() {
    var powerObj1 = obj1.power;
    var powerObj2 = obj2.power;

    var namePowerObj1 = calculateNamePower(obj1);
    var namePowerObj2 = calculateNamePower(obj2);

    var totalPowerObj1 = namePowerObj1 + powerObj1;
    var totalPowerObj2 = namePowerObj2 + powerObj2;

    if (totalPowerObj1 > totalPowerObj2) {
        console.log(`maximum total power`, obj1.name)
    } else if (totalPowerObj1 < totalPowerObj2) {
        console.log(`maximum total power`, obj2.name)
    } else {
        console.log(`maximum total power`, obj1.name, obj2.name)
    }
}
calculateTotalPower()