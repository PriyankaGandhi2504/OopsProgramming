const fs = require('fs')
const input = require("./OopsUtility")
const patient = input.data.readFile('Patient.json')


class Patient{
    constructor(name, id, mobileNumber, age){
        this.name = name
        this.id = id
        this.mobileNumber = mobileNumber
        this.age = age
    }

    add(){
        console.log("aa gaya");
        
    }
}
module.exports = {Patient}