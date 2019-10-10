var methods = {}

methods.input = function () {

    var inputdata = require("readline-sync")
    var val = inputdata.question()

    return val
}
exports.data = methods


methods.enterString = function (str) {
    try {
        if (isNaN(str)) {
            return true
        } else {
            throw "Invalid Input"
        }
        // return str
    }
    catch (err) {
        console.log(err);
        return false
        // enterString(str)
    }
}

methods.writeToFile = function () {
    fs.writeFile('AddressJson.json', JSON.stringify(myJson), (err) => {
        console.log(myJson);
    })
}


methods.doctorUserInput = function () {
    const read = require("readline-sync")
    const fs = require('fs')
    var doctor = fs.readFileSync('Doctor.json', 'utf8')
    var doctorJson = JSON.parse(doctor)
    var doctorClassTemp = require("./DoctorClass")
    var doctorClass = new doctorClassTemp.Doctor
    var array = []
    var name = read.question("Enter Doctor's Name :-> ")
    if (this.enterString(name)) {
        var id = read.questionInt("Enter Doctor's ID :-> ")
        var specialization = read.question("Enter Doctor's Specialization :-> ")
        if (this.enterString(specialization)) {
            var availability = read.question("Enter Doctor's Availability : AM/PM/Both -> ")
            if (availability === 'am' || availability === 'pm' || availability === 'both') {
                var object = new doctorClassTemp.Doctor(name, id, specialization, availability)
                doctorJson.Doctor.push(object)
                console.log("Doctor Json Data From utility " + JSON.stringify(doctorJson));

            } else {
                console.log("Please Enter Valid Input : ");
                this.doctorUserInput()
            }
        } else {
            console.log("Please Enter Valid Input : ");
            this.doctorUserInput()
        }

    } else {
        console.log("Please Enter Valid Input : ");
        this.doctorUserInput()
    }
    return doctorJson
}


methods.patientUserInput = function () {
    const read = require("readline-sync")
    const fs = require('fs')
    var patient = fs.readFileSync('Patient.json', 'utf8')
    var patientJson = JSON.parse(patient)
    var patientClassTemp = require("./PatientClass")
    var patientClass = new patientClassTemp.Patient
    var array = []
    var name = read.question("Enter Patient's Name :-> ")
    if (this.enterString(name)) {
        var id = read.questionInt("Enter Patient's ID :-> ")
        var mobileNumber = read.questionInt("Enter Patient's Mobile Number :-> ")
        if (mobileNumber.toString().length == 10) {
            var age = read.questionInt("Enter Patient's Age : -> ")
            var object = new patientClassTemp.Patient(name, id, mobileNumber, age)
            patientJson.Patient.push(object)
            console.log("Patient Json Data From utility " + JSON.stringify(patientJson));
        } else {
            console.log("Please Enter Valid 10 Digit Mobile Number : ");
            this.patientUserInput()
        }

    } else {
        console.log("Please Enter Valid Input : ");
        this.patientUserInput()
    }
    return patientJson
}

// methods.replaceName = function (reg1, reg2, name) {
//     var replaceName = reg2.test(reg1)
//     return replaceName
//     // if (replaceName == true) {
//     //     reg1 = reg1.replace(reg2, name)
//     // }
//     // return reg1
// }

// methods.replaceFullName = function (reg1, reg3, fullName) {
//     var replaceFullName = reg3.test(reg1)

//     if (replaceFullName == true) {
//         reg1 = reg1.replace(reg3, fullName)
//     }
//     return reg1
// }


// methods.testDate = function (reg1, testdate) {
//     var replaceDate = testdate.test(reg1)
//     if (replaceDate == true) {

//         var date = new Date()
//         var currentDate = date.getDate()
//         var currentMonth = date.getMonth() + 1
//         var currentYear = date.getFullYear()
//         reg1 = reg1.replace(testdate, currentDate + "-" + currentMonth + "-" + currentYear)
//     }
//     return reg1
// }

// methods.replaceMobileNumber = function (reg1, mobileNum, mobileNumber) {    
//     var testmobileNumber = mobileNum.test(reg1)
//     if (testmobileNumber == true) {
//         reg1 = reg1.replace(mobileNum, mobileNumber)
//     }
//     return reg1
// }