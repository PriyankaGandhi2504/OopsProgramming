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

var firstName, numberOfPeople, lastName, address, city;
var state, zipCode, phoneNumber, array = [], object;
var deleteKey, deleteRecord, searchRecord, personRecord = [];



    var address = fs.readFileSync('AddressJson.json', 'utf8')
    var myJson = JSON.parse(address)



displayOptions()

function displayOptions() {
    console.log("Select an Option ");
    console.log("1. Add Entry to Address Book ");
    console.log("2. View Address Book ");
    console.log("3. Delete an address from Address Book ");
    var switchOption = read.questionInt()
    performOperation(switchOption)
}

function performOperation(switchOption) {
    switch (switchOption) {
        case 1:
            userInput()
            break
        case 2:
            display()
            console.log(myJson);
            break
        case 3:
            deleteKey = read.question("Enter First Name of the record to be deleted : \n")
            deleteData(myJson, deleteKey)
            break
        default:
            console.log("Invalid Input");
    }
    var continueSwitch = read.questionInt("Do You Want To Continue, then Press 1 else press any key to exit \n")
    if (continueSwitch == 1) {
        displayOptions()
    }
}




function userInput() {
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
                    if (zipCode.toString().length === 6) {
                        phoneNumber = read.questionInt("Enter Your Phone Number : \n")
                        if (phoneNumber.toString().length == 10) {
                            var object = new addressbook.AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber)
                            // readFromFile()
                            myJson.AddressBook.push(object)
                            fs.writeFileSync('AddressJson.json', JSON.stringify(myJson), (err) => {
                                console.log(myJson);
                            });
                            console.log("Object Data : " + JSON.stringify(myJson))
                        } else {
                            console.log("Please Enter Valid 10 Digit Mobile Number ");
                            userInput()
                        }
                    } else {
                        console.log("Please Enter Valid Input ");
                        userInput()
                    }
                    // array.push(object)

                } else {
                    console.log("Please Enter Valid Input ");
                    userInput()
                }
            } else {
                console.log("Please Enter Valid Input ");
                userInput()
            }
        } else {
            console.log("Please Enter Valid Input ");
            userInput()
        }
    } else {
        console.log("Please Enter Valid Input ");
        userInput()
    }
}
    // updateValues(array)


// function updateValues(array){
//     myJson.AddressBook.push(array)
//     console.log("Json Elements : " + JSON.stringify(myJson));
// }


// var userChoice = read.questionInt();
// if (userChoice == 1) {
//     numberOfPeople = read.questionInt("Enter total number of people : ");
//     userInput(numberOfPeople)
// } else if (userChoice == 2) {

// }


function deleteData(array, deleteKey) {
    // console.log("Array Elements " + JSON.stringify(array));
    let person = array.AddressBook
    console.log("Array Stringify " + JSON.stringify(person));

    for (let i = 0; i < person.length; i++) {
        // console.log("Array First Name " +  person[i].FirstName);
        if (person[i].FirstName === deleteKey) {
            // console.log("Array First Name " + person[i].FirstName);
            person.splice(i, 1)
        }
    }
    myJson.AddressBook.push(JSON.stringify(person))
    fs.writeFile('AddressJson.json', JSON.stringify(myJson), (err) => {

        console.log(myJson);
    });
}


// searchRecord = read.question("Enter keyword to search record accordingly : FirstName/LastName/City/State/ZipCode \n");
searchRec(myJson)

function searchRec(myJson) {
    personRecord = myJson.AddressBook
    for (let i = 0; i < personRecord.length; i++) {
        for (let j = i + 1; j < personRecord.length; j++) {
            if (personRecord[i].LastName > personRecord[j].LastName) {
                let temp = personRecord[i]
                personRecord[i] = personRecord[j]
                personRecord[j] = temp
            }
        }

        // 
    }
}


function display(){
    console.log("----------------------------------------------------------------------------");
    console.log("FirstName" + " " + "LastName " + " " + "Address " + " " + "City " + " " + "State " + " " + "ZipCode " + " " + "PhoneNumber");
    console.log("----------------------------------------------------------------------------");
    //   console.log("Person Record " + personRecord);

    for (let i = 0; i < personRecord.length; i++) {
        console.log(personRecord[i].firstName + "     " + personRecord[i].lastName + "     " + personRecord[i].address + "     " + personRecord[i].city + "     " + personRecord[i].state + "     " + personRecord[i].zipCode + "     " + personRecord[i].phoneNumber);
        console.log();
    }
}


   // person.forEach(element => {
    //     if(element.FirstName === deleteKey){
    //         console.log("Element " + element.FirstName);

    //         delete myJson.AddressBook[element.FirstName]
    //         console.log("Delete function " + JSON.stringify(myJson));

    //                 person.splice(element,1) 
    //             }   
    // });
    // console.log("Array After Splice : " + JSON.stringify(person));