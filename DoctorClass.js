// const patentVar = require("./PatientClass")

class Doctor{
    constructor(name, id, specialization, availability, appointmentCounter){
        this.name = name
        this.id = id
        this.specialization = specialization
        this.availability = availability
        this.appointmentCounter = appointmentCounter
    }
    
}
// var object = new patentVar.Patient()
// object.add()

module.exports = {Doctor}