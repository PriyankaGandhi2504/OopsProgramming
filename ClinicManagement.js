/**
* 12. Clinique Management Programme. ​ This programme is used to manage a list of
Doctors associated with the Clinique. This also manages the list of patients who use the
clinique. It manages Doctors by Name, Id, Specialization and Availability (AM, PM or
both). It manages Patients by Name, ID, Mobile Number and Age. The Program allows
users to search Doctor by name, id, Specialization or Availability. Also the programs
allows users to search patient by name, mobile number or id. The programs allows
patients to take appointment with the doctor. A doctor at any availability time can see
only 5 patients. If exceeded the user can take appointment for patient at different date or
availability time. Print the Doctor Patient Report. Also show which Specialization is
popular in the Clinique as well as which Doctor is popular. For .NET Engineers use the
following
a. ADO.NET Connection Pooling to maintain Doctor, Patient and Appointment Info
in the Database
b. Use Log4NET to Log Data
c. Read Patient and Doctor Data from JSON File using File IO and latter with
Firebase. Use Factory Pattern and Interface Approach to read Doctor and Patient
information.

Author Name : Priyanka Gandhi
Date : 10/10/2019
*/

const input = require("./OopsUtility")
const read = require("readline-sync")
const fs = require('fs')

var doctorJson; var patientJson;

readFromFile()

function readFromFile(){
    var doctor = fs.readFileSync('Doctor.json', 'utf8')
    doctorJson = JSON.parse(doctor)
    var patient = fs.readFileSync('Patient.json', 'utf8')
    patientJson = JSON.parse(patient)
}


var doctorDetailsArray; var patientDetailsArray; var patientArray = []
var switchOption

displayOptions()

function displayOptions() {
    console.log("Select an option : ");
    console.log("1. Add Entry for Doctor");
    console.log("2. View List of Doctors");
    console.log("3. Add Entry for Patient");
    console.log("4. View List of Patients");
    console.log("5. Search for a Doctor");
    console.log("6. Search for a Patient");
    console.log("7. Check for an Appointment");
    switchOption = read.questionInt()
    performOperation(switchOption)
}


function performOperation(switchOption) {
    switch (switchOption) {
        case 1:
            doctorDetailsArray = input.data.doctorUserInput()
            break
        case 2:
            readFromFile()
            console.log(JSON.stringify(doctorJson));
            break
        case 3:
            patientDetailsArray = input.data.patientUserInput()
            break
        case 4:
            readFromFile()
            console.log(JSON.stringify(patientJson));
            break
        case 5:
                var doctorInfo = read.question("Enter Doctor's Name/Id/Specialization to schedule an appointment : \n");
                input.data.allocateDoctor(doctorInfo)
            break
        case 6:
            var patientInfo = read.question("Enter Patient's Name/Id/MobileNumber to search details : \n")
            input.data.searchPatient(patientInfo)
            break
        case 7:
            break
        default:
            console.log("Invalid Input");
    }
    var continueSwitch = read.questionInt("Do You Want To Continue, then Press 1 else press any key to exit \n")
    if (continueSwitch == 1) {
        displayOptions()
    }
}














// /********* Doctor Details **********/


// var numberOfDoctors = read.questionInt("Enter Number of Doctors in Clinic : ")
// console.log("Enter Doctor Details ");
// for (i = 0; i < numberOfDoctors; i++) {
//     doctorDetailsArray = input.data.doctorUserInput()
// }
// // console.log("Doctor Details Array " + JSON.stringify(doctorDetailsArray));
// console.log();

/********* Patient Details *********/


// var numberOfPatients = read.questionInt("Enter Number of Patients : ")
// console.log("Enter Patient Details ");
// for (let i = 0; i < numberOfPatients; i++) {
//     patientDetailsArray = input.data.patientUserInput()
// }
// console.log();

/******** Search Patient ***********/
// var searchPatientChoice = read.questionInt("Press 0 if you want to search Patient ");
// if (searchPatientChoice === 0) {
//     var patientInfo = read.question("Enter Patient's Name/Id/MobileNumber to search details : \n")
//     // patientDetailsArray = patientDetailsArray.Patient
//     // console.log("Patient Details Array : " + patientDetailsArray.Patient.length);
//     // console.log("Patient Details after JSON " + JSON.stringify(patientDetailsArray));
//     input.data.searchPatient(patientInfo)
// }




        // for(let i = 1; i <= patientDetailsArray.length; i++) {
        //     console.log("Print Name " + patientDetailsArray[i].name);

        //     if(patientDetailsArray[i].name == patientInfo){
        //         console.log("Patient's Details " + patientDetailsArray[i].name);
        //     }else if(patientDetailsArray[i].id == patientInfo){
        //         console.log("Patient's Details " + patientDetailsArray[i].id);
        //     }else if(patientDetailsArray[i].mobileNumber == patientInfo){
        //         console.log("Patient's Details " + patientDetailsArray[i].mobileNumber);
        //     }
        // }