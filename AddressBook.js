/*
*11. Create Object Oriented Analysis and Design of a simple ​ Address Book Problem​.

Author Name : Priyanka Gandhi
Date : 09/10/2019
*/

const input = require("./OopsUtility")
const read = require("readline-sync")
const fs = require('fs')
var addressbook = require("./AddressClass")
addressClass = new addressbook.AddressBook
var address = fs.readFileSync('AddressJson.json', 'utf8')
var myJson = JSON.parse(address)

var firstName; var numberOfPeople; var lastName; var address; var city;
var state; var zipCode; var phoneNumber; var array = []; var object;
var deleteKey; var deleteRecord;

numberOfPeople = read.questionInt("Enter total number of people : ");


userInput(numberOfPeople)

function userInput(numberOfPeople) {
    for (let i = 0; i < numberOfPeople; i++) {
        firstName = read.question("Enter Your First Name : \n")
        let temp = input.data.enterString(firstName)
        if (temp == true) {
            lastName = read.question("Enter Your Last Name : \n")
            let temp = input.data.enterString(lastName)
            if (temp == true) {
                address = read.question("Enter Your Address : \n")
                city = read.question("Enter Your City : \n")
                let tempVar = input.data.enterString(city)
                if (tempVar == true) {
                    state = read.question("Enter Your State : \n")
                    let temp = input.data.enterString(state)
                    if (temp == true) {
                        zipCode = read.questionInt("Enter Zip Code : \n")
                        phoneNumber = read.questionInt("Enter Your Phone Number : \n")

                        object = {
                            "First Name" : firstName,
                            "Last Name" : lastName,
                            "Address" : address,
                            "City" : city,
                            "State" : state,
                            "Zip Code" : zipCode,
                            "Phone Number" : phoneNumber
                        }

                        array.push(object)

                    } else {
                        console.log("Please Enter Valid Input ");
                        userInput(numberOfPeople - 1)
                    }
                } else {
                    console.log("Please Enter Valid Input ");
                    userInput(numberOfPeople - 1)
                }
            } else {
                console.log("Please Enter Valid Input ");
                userInput(numberOfPeople - 1)
            }
        } else {
            console.log("Please Enter Valid Input ");
            userInput(numberOfPeople - 1)
        }
    }
    updateValues(array)
}


function updateValues(array){
    myJson.AddressBook.push(array)
    console.log("Json Elements : " + JSON.stringify(myJson));
}

console.log("To add some more entries -> Press 1 ");
console.log("To delete records -> Press 2 ");

var userChoice = read.questionInt();
if(userChoice == 1){
    numberOfPeople = read.questionInt("Enter total number of people : ");
    userInput(numberOfPeople)
}else if(userChoice == 2){
     deleteRecord = read.question("Enter First Name of the record to be deleted : \n")
    // let key = "firstName"
    // myJson = delete JSON.stringify(myJson[deleteRecord])
    deleteKey = object.firstName

    // delete myJson.firstName
}
console.log(JSON.stringify(myJson));
console.log("Deleted Key " + deleteKey);
