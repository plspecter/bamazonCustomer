//call npm package 
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        message: "Choose a menu option",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
    }
]).then(function (user) {
    if (user.choices === "View Products on Sale") {
        console.log("\n==============================================\n");
        console.log("\n \n");
        console.log("\n==============================================\n");

    }

    else if (user.choices === "View Low Inventory") {
        console.log("==============================================");
        console.log("\n \n");
        console.log("\n==============================================\n");


    }


    else if (user.choices === "Add to Inventory") {
        console.log("==============================================");
        console.log("\n \n");
        console.log("\n==============================================\n");

    }

    else if (user.choices === "Add New Product") {
        console.log("==============================================");
        console.log("\n \n");
        console.log("\n==============================================\n");

    }

}) 