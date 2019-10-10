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
var doctor = fs.readFileSync('Doctor.json', 'utf8')
var doctorJson = JSON.parse(doctor)
var patient = fs.readFileSync('Patient.json', 'utf8')
var patientJson = JSON.parse(patient)
/********* Doctor Details **********/
var doctorDetailsArray = []

var numberOfDoctors = read.questionInt("Enter Number of Doctors in Clinic : ")
console.log("Enter Doctor Details ");
for (i = 0; i < numberOfDoctors; i++) {
    doctorDetailsArray[i] = input.data.doctorUserInput()
}
console.log("Doctor Details Array " + JSON.stringify(doctorDetailsArray));
console.log();

/********* Patient Details *********/
var patientDetailsArray = []

var numberOfPatients = read.questionInt("Enter Number of Patients : ")
if (numberOfPatients <= 5) {
    console.log("Enter Patient Details ");
    for (let i = 0; i < numberOfPatients; i++) {
        patientDetailsArray[i] = input.data.patientUserInput()
    }
    console.log("Patient Details Array " + JSON.stringify(patientDetailsArray));
    console.log();
} else {
    //schedule appointment for tomorrow 
}