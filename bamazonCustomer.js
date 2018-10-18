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
    password: "password",
    database: "bamazon"

})

//connect to mysql database and server
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connect.end();
});

//starts with this prompt
function start() {

    inquirer.prompt([

        {
            type: "input",
            name: "id",
            message: "What product would you like to buy?"
        }]).then(function (user) {
            //insert the name of the product into the database
            connection.query(
                
                "INSERT INTO auctions SET ?",
                {
                foodItem: user.food,
                foodAmount: user.units
                }
            )

            if (user.id === "") {
                //get the string that the user input into the terminal
                var foodNameArray = [];
                for (var i = 0; i < results.length; i++) {
                    foodNameArray.push(results[i].foodItem)
                }
                console.log("\n==============================================\n");
                console.log("You want to buy " + user.id);
                console.log("There are enough left!")
                // console.log("\nYou buy " + user.id);
                console.log("\n==============================================\n");
            }
            else {
                console.log("Insufficient quality!")
            }

        });

    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many units would you like to buy?"
        }
    ]).then(function (user) {

        if (user.units === 0) {
            console.log("\n==============================================\n");
            console.log("You want " + user.units + user.id);
            console.log("\n==============================================\n");
        }


    });

}

