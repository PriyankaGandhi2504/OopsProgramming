/**
* 1. JSON Inventory Data Management of Rice, Pulses and Wheats
a. Desc -> Create a JSON file having Inventory Details for Rice, Pulses and Wheats
with properties name, weight, price per kg.
b. Use Library : ​ Java JSON Library​ , For IOS JSON Library use
NSJSONSerialization​ for parsing the JSON​ .
c. I/P -> read in JSON File
d. Logic -> Get JSON Object in Java or NSDictionary in iOS. Create Inventory
Object from JSON. Calculate the value for every Inventory.
e. O/P -> Create the JSON from Inventory Object and output the JSON String
 */

const input = require("./OopsUtility")
const read = require("readline-sync")
const fs = require('fs')
var inventoryManagement = fs.readFileSync('Inventory.json', 'utf8')
var myJson = JSON.parse(inventoryManagement)
const riceClass = require("./Rice")
const rice = new riceClass.Rice()
const pulseClass = require("./Pulses")
const pulse = new pulseClass.Pulses()
const wheatClass = require("./Wheats")
const wheat = new wheatClass.Wheats()
// console.log("Json File" + JSON.stringify(myJson));
var array = []; var name; var weight; var pricePerKg; var total = 0;
var myJson; var inventoryNumber; var dummyvariable = ""
display()

function display() {
    console.log("Please enter an option to add details for inventories : ");
    console.log("1. Rice Inventory");
    console.log("2. Pulses Inventory");
    console.log("3. Wheats Inventory");
    var inventoryNumber = read.questionInt()
    performOperation(inventoryNumber)
}


function performOperation(inventoryNumber) {
    switch (inventoryNumber) {
        case 1:
            dummyvariable = "Rice"
            // console.log("Enter number of entries");
            // numberOfEntries = read.questionInt()
            // for (let i = 0; i < numberOfEntries; i++) {
                array = userInput(dummyvariable)
                myJson.Rice.push(array)
                fs.writeFileSync('Inventory.json',JSON.stringify(myJson),(err) => {
                    console.log(myJson);
                })
            // }
            // console.log("Inventory : " + JSON.stringify(myJson));

            break
        case 2:
            dummyvariable = "Pulses"
            // console.log("Enter number of entries");
            // numberOfEntries = read.questionInt()
            // for (let i = 0; i < numberOfEntries; i++) {
                array = userInput(dummyvariable)
                myJson.Pulses.push(array)
                fs.writeFileSync('Inventory.json',JSON.stringify(myJson),(err) => {
                    console.log(myJson);
                    
                })
                // myJson.Rice.push(array)
            // }
            console.log("Inventory : " + JSON.stringify(myJson));

            break
        case 3:
            dummyvariable = "Wheats"
            // console.log("Enter number of entries");
            // numberOfEntries = read.questionInt()
            // for (let i = 0; i < numberOfEntries; i++) {
                array = userInput(dummyvariable)
                myJson.Wheats.push(array)
                fs.writeFileSync('Inventory.json',JSON.stringify(myJson),(err) => {
                    console.log(myJson);
                    
                })
                // myJson.Rice.push(array)
            // }
            console.log("Inventory : " + JSON.stringify(myJson));
            break
        default:
            console.log("Invalid Input");
            display()
    }
    console.log("Do you want to add some more entries -> Press 1");
    moreEntriesOption = read.questionInt()
    if (moreEntriesOption == 1) {
        display()
    }

}

function userInput(dummyvariable) {
    console.log("Enter " + dummyvariable + " Name ");
    name = read.question()
    array.push(name)
    console.log("Enter " + dummyvariable + " weight ");
    weight = read.questionInt()
    array.push(weight)
    console.log("Enter price per Kg ");
    pricePerKg = read.questionInt()
    array.push(pricePerKg)
    total = weight * pricePerKg
    array.push(total)
    // total = rice.totalQuantity(weight, pricePerKg)
    updateValues(dummyvariable, array)

}

function updateValues(dummyvariable, array) {
    // console.log("Array Values " + JSON.stringify(array));
    var display;
    switch (dummyvariable) {
        case "Rice":
            display = new riceClass.Rice(array[0], array[1], array[2], array[3])
            myJson.Rice.push(display)
            // myJson.Rice.push(total)
            console.log("Inventory : " + JSON.stringify(myJson));
            // console.log("Array " + JSON.stringify(display) + " " + "Total Quantity " + total);
            break
        case "Wheats":
            display = new wheatClass.Wheats(array[0], array[1], array[2], array[3])
            myJson.Wheats.push(display)
            // myJson.Rice.push(total)
            console.log("Inventory : " + JSON.stringify(myJson));
            // console.log("Array " + display + " " + "Total Quantity " + total);
            break
        case "Pulses":
            display = new pulseClass.Pulses(array[0], array[1], array[2], array[3])
            myJson.Pulses.push(display)
            // myJson.Rice.push(total)
            console.log("Inventory : " + JSON.stringify(myJson));
            // console.log("Array " + display + " " + "Total Quantity " + total);
            break
    }

}


// function userInputForWheats() {
//     console.log("Enter Wheats Name ");
//     name = read.question()
//     array.push(name)
//     console.log("Enter Wheats weight ");
//     weight = read.questionInt()
//     array.push(weight)
//     console.log("Enter price per Kg ");
//     pricePerKg = read.questionInt()
//     array.push(pricePerKg)
//     total = wheat.totalQuantity(weight, pricePerKg)
//     var display = wheat.add(name, weight, pricePerKg)
//     console.log("Array " + display + " " + "Total Quantity " + total);
// }

// function userInputForPulse() {
//     console.log("Enter Pulse Name ");
//     name = read.question()
//     array.push(name)
//     console.log("Enter Pulse weight ");
//     weight = read.questionInt()
//     array.push(weight)
//     console.log("Enter price per Kg ");
//     pricePerKg = read.questionInt()
//     array.push(pricePerKg)
//     total = pulse.totalQuantity(weight, pricePerKg)
//     var display = pulse.add(name, weight, pricePerKg)
//     console.log("Array " + display + " " + "Total Quantity " + total);
// }


// var object = {name: "Basmati", weight: 100, pricePerKg: 198 }
// myJson.Rice.push(object)
// console.log("Display " + JSON.stringify(myJson));






// const inventoryManagement = require('./Inventory.json')
// var jsonFile = {"RiceInventory": [{name: "Basmati", weight: 100, pricePerKg: 198 }, { name: "Daawat", weight: 55, pricePerKg: 180 }],
// "pulses": [{ name: "Green Gram", weight: 150, pricePerKg: 60 }, { name: "Red Gram", weight: 110, pricePerKg: 75 }],
// "wheats": [{ name: "Organic Wheat", weight: 180, pricePerKg: 198 }, { name: "Broken Wheat", weight: 50, pricePerKg: 180 }]}
// var length; var value


// calculateValueOfinventory()

// function calculateValueOfinventory() {

//     length = jsonFile.length
//     console.log("Length " + length);
//     var myJson = JSON.stringify(jsonFile)
//             console.log(myJson);
//     // console.log("0th Row : " + jsonFile[0]);

//     for (i = 0; i < length; i++) {
//         for (j = 0; j < i.length; j++) {
//             value = jsonFile[j].weight * jsonFile[j].pricePerKg
//             var myJson = JSON.stringify(value)
//             console.log(jsonFile[j].name + " " + myJson);
//         }
//     }





    // switch (inventoryNumber) {
    //     case 1:
    //         length = riceInventory.length
    //         for (i = 0; i < length; i++) {
    //             value = riceInventory[i].weight * riceInventory[i].pricePerKg
    //             var myJson = JSON.stringify(value)
    //             console.log(riceInventory[i].name + " " + myJson);
    //         }
    //         break
    //     case 2:
    //             length = pulsesInventory.length
    //             for(i = 0; i < length; i++){
    //                 value = pulsesInventory[i].weight * pulsesInventory[i].pricePerKg
    //                 var myJson = JSON.stringify(value)
    //                 console.log(pulsesInventory[i].name + " " + myJson);
    //             }
    //             break
    //     case 3:
    //             length = wheatsInventory.length
    //             for(i = 0; i < length; i++){
    //                 value = wheatsInventory[i].weight * wheatsInventory[i].pricePerKg
    //                 var myJson = JSON.stringify(value)
    //                 console.log(wheatsInventory[i].name + " " + myJson);
    //             }
    //             break
    // }
// }