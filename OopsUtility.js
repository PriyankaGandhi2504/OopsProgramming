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