//call npm package 
var inquirer = require("inquirer");

inquirer.prompt([

    {
        type: "input",
        name: "id",
        message: "What product would you like to buy?"
    },

    {
        type: "input",
        name: "units",
        message: "How many units would you like to buy?"
    }
]).then(function (user) {


    if (user.id === "") {

        console.log("==============================================");
        console.log("You want to buy " + user.name);
        console.log("There are enough left!")
        console.log("You buy " + user.name);
        console.log("==============================================");
    }
 else {
        console.log("Insufficient quality!")
    }

});

