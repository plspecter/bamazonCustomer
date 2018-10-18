//call mysql
var mysql = require("mysql");

//call npm package 
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localHost",

    // Your port; if not 3306
    port: 3306,

    //Username
    user: "root",

    //Your password
    password: "password123",
    database: "bamazon"

})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connect.end();
});


inquirer.prompt([
    {
        name: "menu",
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