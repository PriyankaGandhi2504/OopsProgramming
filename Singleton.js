const doctorClass = require("./DoctorClass")

class Singleton{
    constructor(){
    }
    
    demoFunction(name, id, specialization, availability, appointmentCounter){
        return new doctorClass.Doctor(name,id, specialization, availability, appointmentCounter)
    }
}

var instance =  new Singleton()
// instance.add()
console.log(instance.demoFunction("Abc", 1, 'xyz', '10am-2pm', 3));
// console.log(instance.demoFunction("Xyz", 1, 'xyz', '10am-2pm', 3));