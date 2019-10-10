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
var deleteKey; var deleteRecord; var searchRecord; var personRecord = [];

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

                        if (zipCode.toString().length === 6) {
                            phoneNumber = read.questionInt("Enter Your Phone Number : \n")
                            if (phoneNumber.toString().length == 10) {

                                var object = new addressbook.AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber)
                                // console.log("Object Returns: " + JSON.stringify(object));
                                
                                // object = {
                                //     "FirstName": firstName,
                                //     "LastName": lastName,
                                //     "Address": address,
                                //     "City": city,
                                //     "State": state,
                                //     "ZipCode": zipCode,
                                //     "PhoneNumber": phoneNumber
                                // }
                                myJson.AddressBook.push(object)
                                console.log("Object Data : " + JSON.stringify(myJson));
                            } else {
                                console.log("Please Enter Valid 10 Digit Mobile Number ");
                                userInput(numberOfPeople - 1)
                            }
                        } else {
                            console.log("Please Enter Valid Input ");
                            userInput(numberOfPeople - 1)
                        }
                        // array.push(object)

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
    // updateValues(array)
}

// function updateValues(array){
//     myJson.AddressBook.push(array)
//     console.log("Json Elements : " + JSON.stringify(myJson));
// }

console.log("To add some more entries -> Press 1 ");
console.log("To delete records -> Press 2 ");

var userChoice = read.questionInt();
if (userChoice == 1) {
    numberOfPeople = read.questionInt("Enter total number of people : ");
    userInput(numberOfPeople)
} else if (userChoice == 2) {
    deleteKey = read.question("Enter First Name of the record to be deleted : \n")
    deleteData(myJson, deleteKey)
}

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
}

fs.writeFile('AddressJson.json', JSON.stringify(myJson), (err) => {
    console.log(myJson);
})

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