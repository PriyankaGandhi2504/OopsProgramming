// const patentVar = require("./PatientClass")

class Doctor{
    constructor(name, id, specialization, availability){
        this.name = name
        this.id = id
        this.specialization = specialization
        this.availability = availability
    }
    
}
// var object = new patentVar.Patient()
// object.add()

module.exports = {Doctor}