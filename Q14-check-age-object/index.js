const obj1 = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
}
const obj2 = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}
function checkAge() {
    if (obj1.age > obj2.age) {
        console.log(obj1.name)
    } else if (obj1.age < obj2.age) {
        console.log(obj2.name)
    } else {
        console.log(obj1.name, obj2.name)
    }
}
checkAge();