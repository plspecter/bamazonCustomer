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

        console.log("\n==============================================\n");
        console.log("You want to buy " + user.name);
        console.log("There are enough left!")
        console.log("\nYou buy " + user.name);
        console.log("\n==============================================\n");
    }
 else {
        console.log("Insufficient quality!")
    }

});

