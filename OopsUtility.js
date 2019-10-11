const read = require("readline-sync")
const fs = require('fs')
var doctor = fs.readFileSync('Doctor.json', 'utf8')
var doctorJson = JSON.parse(doctor)
var patient = fs.readFileSync('Patient.json', 'utf8')
var patientJson = JSON.parse(patient)

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
    var doctorClassTemp = require("./DoctorClass")
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
                fs.writeFileSync('Doctor.json', JSON.stringify(doctorJson), (err) => {
                    console.log(doctorJson);
                })
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
    var patientClassTemp = require("./PatientClass")
    // var patientClass = new patientClassTemp.Patient
    var array = []; var count = 0;
    // if (count < 5) {
        // console.log("Patient Json " + patientJson.Patient);
        var name = read.question("Enter Patient's Name :-> ")
       
        if (this.enterString(name)) {
            var id = read.questionInt("Enter Patient's ID :-> ")
            var mobileNumber = read.questionInt("Enter Patient's Mobile Number :-> ")
            if (mobileNumber.toString().length == 10) {
                var age = read.questionInt("Enter Patient's Age : -> ")
                var object = new patientClassTemp.Patient(name, id, mobileNumber, age)
                patientJson.Patient.push(object)
                fs.writeFileSync('Patient.json', JSON.stringify(patientJson), (err) => {
                    console.log(patientJson);
                })
                console.log("Patient Json Data From utility " + JSON.stringify(patientJson));
               
            } else {
                console.log("Please Enter Valid 10 Digit Mobile Number : ");
                this.patientUserInput()
            }

        } else {
            console.log("Please Enter Valid Input : ");
            this.patientUserInput()
        }
        // count++
    // } else {
    //     var date = new Date()
    //     var currentDate = date.getDate() + 1
    //     var currentMonth = date.getMonth() + 1
    //     var currentYear = date.getFullYear()
    //     console.log("Appointment will be scheduled for Tomorrow " + currentDate + "/" + currentMonth + "/" + currentYear);
    //     var scheduleOption = read.questionInt("To continue Press 1");
    //     if (scheduleOption == 1) {
    //         patientDetailsArray = thispatientUserInput()
    //     }
    // }

   
    
    return patientJson
}

methods.allocateDoctor = function(doctorInfo){
    // var count = 0
    var doctorDetail = doctorJson.Doctor
    // console.log("Doctor Details " + JSON.stringify(doctorDetail));
    for(let i = 0; i < doctorDetail.length ; i++){
        if(doctorDetail[i].name == doctorInfo){
            console.log("Doctor's Details " + JSON.stringify(doctorDetail[i]));
            // count++
        }else if(doctorDetail[i].id == doctorInfo){
            console.log("Doctor's Details " + JSON.stringify(doctorDetail[i]));
            // count++
        }else if(doctorDetail[i].specialization == doctorInfo){
            console.log("Doctor's Details " + JSON.stringify(doctorDetail[i]));
        }
            // count++
        // }else{
        //     console.log("Please Enter Valid Input");
        //     var doctorInfo = read.question("Enter Doctor's Name/Id/Specialization to schedule an appointment : \n");
        //     this.allocateDoctor(doctorInfo)
        // }
    }
    // return count
}

methods.searchPatient = function(patientInfo){
    var patientDetail = patientJson.Patient
// console.log("Patient Array : " + JSON.stringify(patientJson));

    for(let i = 0; i < patientDetail.length; i++) {
            // console.log("Print Name " + patientDetail[i].name);
            if(patientDetail[i].name == patientInfo){
                console.log("Patient's Details " + JSON.stringify(patientDetail[i]))
            }else if(patientDetail[i].id == patientInfo){
                console.log("Patient's Details " + JSON.stringify(patientDetail[i]))
            }else if(patientDetail[i].mobileNumber == patientInfo){
                console.log("Patient's Details " + JSON.stringify(patientDetail[i]))
            }
        }
}

methods.readFile = function(path){
    const fs = require('fs')
    var jsonObject = fs.readFileSync(path)
    return JSON.parse(jsonObject)
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