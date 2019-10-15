const doctor = require("./DoctorFactory")
const patient = require("./PatientFactory")

const hospitalFactory = function(type, name, age, gender, doctorName, doctorId, specialization, patientName){
    if(type === 'Doctor'){
        return new doctor.Doctor(name, doctorName, age, gender, doctorId, specialization);
    }
    if(type === 'Patient'){
        return new patient.Patient(patientName, age, gender);
    }
}

module.exports = hospitalFactory