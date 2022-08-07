var readlineSync = require('readline-sync');
var chalk = require('chalk');
var studentArray = [];
var highestMarks = { name: "", score: 0 };
for (let i = 0; i < 5; i++) {
    var userName = readlineSync.question("Enter Your Name : ");
    var unitTestMarks = readlineSync.question(chalk.green("Enter Your unit test marks : "));
    var preFinalMarks = readlineSync.question(chalk.red("Enter Your pre final marks : "));
    var finalMarks = readlineSync.question(chalk.blue("Enter Your final marks : "));
    let totalMarks = parseFloat(unitTestMarks) + parseFloat(preFinalMarks) + parseFloat(finalMarks);
    let averageMarks = Math.trunc(totalMarks / 3);
    studentArray.push({
        "name": userName,
        "unit-marks": unitTestMarks,
        "pre-final-marks": preFinalMarks,
        "final-marks": finalMarks,
        "total marks": totalMarks,
        "average marks": averageMarks
    });
    if (totalMarks > highestMarks.score) {
        highestMarks["name"] = userName;
        highestMarks["score"] = totalMarks
    }
    console.log(chalk.greenBright(JSON.stringify(studentArray[i])));
}
console.log(chalk.blue(`${highestMarks.name} has maximum total marks : ${highestMarks.score}`));

