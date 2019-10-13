/*
*11. Create Object Oriented Analysis and Design of a simple ​ Address Book Problem​.

Author Name : Priyanka Gandhi
Date : 09/10/2019
*/

const input = require("./OopsUtility")
const read = require("readline-sync")
const fs = require('fs')
// var addressbook = require("./AddressClass")
var address = fs.readFileSync('AddressJson.json', 'utf8')
var myJson = JSON.parse(address)

var array = []
array = myJson.AddressBook
class AddressBook {
    displayOptions() {
        console.log("Select an Option ");
        console.log("1. Add Entry to Address Book ");
        console.log("2. View Address Book ");
        console.log("3. Delete an address from Address Book ");
        var switchOption = read.questionInt()
        addressbook.performOperation(switchOption)
    }

    performOperation(switchOption) {
        switch (switchOption) {
            case 1:
                var object = input.data.userInputForAddress()
                myJson.AddressBook.push(object)
                fs.writeFileSync('AddressJson.json', JSON.stringify(myJson), (err) => {
                    console.log(myJson);
                });
                console.log("Object Data : " + JSON.stringify(myJson))
                break
            case 2:
                input.data.displayAllAddress(myJson)
                console.log(myJson);
                break
            case 3:
                var deleteKey = read.question("Enter First Name of the record to be deleted : \n")
                console.log("Array Size : " + array.length);
                input.data.deleteDataFromAddress(array, deleteKey, myJson)
                break
            default:
                console.log("Invalid Input");
        }
        var continueSwitch = read.questionInt("Do You Want To Continue, then Press 1 else press any key to exit \n")
        if (continueSwitch == 1) {
            this.displayOptions()
        }
    }
}
module.exports = { AddressBook }

var addressbook = new AddressBook
addressbook.displayOptions()


   // person.forEach(element => {
    //     if(element.FirstName === deleteKey){
    //         console.log("Element " + element.FirstName);
    //         delete myJson.AddressBook[element.FirstName]
    //         console.log("Delete function " + JSON.stringify(myJson));
    //                 person.splice(element,1) 
    //             }   
    // });
    // console.log("Array After Splice : " + JSON.stringify(person));