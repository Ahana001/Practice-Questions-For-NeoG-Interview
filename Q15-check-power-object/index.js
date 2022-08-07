const personOne = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}
const personTwo = {
    name: "Krishana",
    power: 2325,
    yuga: "Dwapar"
}
function checkPower() {
    if (personOne.power > personTwo.power) {
        return personOne.name;
    } else if (personTwo > personOne) {
        return personTwo.name;
    } else {
        return personOne.name + " " + personTwo.name;
    }
}
console.log(checkPower(), `is the person has maximum Power`)