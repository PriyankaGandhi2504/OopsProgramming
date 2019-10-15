const Hospital = require("./Hospital")
// var dummyVar = new Hospital.Hospital()

class Doctor extends Hospital{
    constructor(name, doctorName, age, gender, doctorId, specialization){
        super(name)
        this.doctorName = doctorName
        this.age = age
        this.gender = gender
        this.doctorId = doctorId
        this.specialization = specialization
    }
}

module.exports = {Doctor}