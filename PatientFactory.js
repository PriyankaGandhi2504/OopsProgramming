const Hospital = require("./Hospital")

class Patient extends Hospital{
    constructor(name, patientName, age, gender){
        super(name)
        this.patientName = patientName
        this.age = age
        this.gender = gender
    }
}

module.exports = {Patient}