const read = require("readline-sync")
const fs = require('fs')
var doctor = fs.readFileSync('Doctor.json', 'utf8')
var doctorJson = JSON.parse(doctor)
var patient = fs.readFileSync('Patient.json', 'utf8')
var patientJson = JSON.parse(patient)
var stock = fs.readFileSync('StockDetails.json', 'utf8')
var stockJson = JSON.parse(stock)
var user = fs.readFileSync('UserDetails.json', 'utf8')
var userJson = JSON.parse(user)

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

methods.validateName = function(reg1){
    var reg2 = /<<name>>/
    var reg3 = /^[A-z]+/
    var nameValue = reg2.test(reg1)
    // var nameValue = input.data.replaceName(reg1, reg2, name)
    if (nameValue == true) {
        console.log("Please Enter your Name: ");
        var name = read.question()
        var userValue = reg3.test(name)
        if (userValue == true) {
            reg1 = reg1.replace(reg2, name)
        }else{
            console.log("Please enter valid input ");
            this.validateName(reg1)
        }
    }else{
        console.log("Please enter valid input ");
        this.validateName(reg1)
    }
    console.log(reg1);
    return reg1
}

methods.validateFullName = function(reg1){
    var reg4 = /<<full name>>/
    var reg5 = /^[a-zA-Z ]{2,30}$/
    // var reg5 = /(^[A-z]+)\s(^[A-z]+)/
    var fullNameValue = reg4.test(reg1)
    if (fullNameValue == true) {
        console.log("Please Enter Your Full Name : ");
        var fullName = read.question()
        var userValue = reg5.test(fullName)
        console.log("UserValue " + userValue);
        if (userValue == true) {
            reg1 = reg1.replace(reg4, fullName)
        }else{
            console.log("Please enter valid input ");
            this.validateFullName(reg1)
        }
    }else{
        console.log("Please enter valid input ");
        this.validateFullName(reg1)
    }
    console.log(reg1);
    return reg1
}

methods.validateNumber = function(reg1){
    var reg6 = /\xxxxxxxxxx/
    var reg7 = /^[0]?[789]\d{9}$/
    var mobileNumberValue = reg6.test(reg1)
    if (mobileNumberValue == true) {
        console.log("Enter 10 digit mobile number starting from 7/8/9");
        var mobileNumber = []
        mobileNumber = read.questionInt()
        let userValue = reg7.test(mobileNumber)
        if (userValue == true) {
            reg1 = reg1.replace(reg6, mobileNumber)
        }else{
            console.log("Please enter valid input ");
            this.validateNumber(reg1)
        }
    }else{
        console.log("Please enter valid input ");
        this.validateFullName(reg1)
    }
    console.log(reg1);
    return reg1
}

methods.validateDate = function(reg1){
    var testdate = /([0-9]+)-([0-9]+)-([0-9]+)/
    var replaceDate = testdate.test(reg1)
    if (replaceDate == true) {
    
        var date = new Date()
        var currentDate = date.getDate()
        var currentMonth = date.getMonth() + 1
        var currentYear = date.getFullYear()
        reg1 = reg1.replace(testdate, currentDate + "-" + currentMonth + "-" + currentYear)
    }else{
        console.log("Please enter valid input ");
        this.validateDate(reg1)
    }
    console.log(reg1);
    return reg1
    
}

/**Write Function **/
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
            var availability = read.question("Enter Doctor's Availability : -> ")
            var appointmentCounter = read.questionInt("Enter Number of Appointments Scheduled")
            if (appointmentCounter > 0 && appointmentCounter <= 5) {
                var object = new doctorClassTemp.Doctor(name, id, specialization, availability, appointmentCounter)
                doctorJson.Doctor.push(object)
                fs.writeFileSync('Doctor.json', JSON.stringify(doctorJson), (err) => {
                    console.log(doctorJson);
                })
                console.log("Doctor Json Data From utility " + JSON.stringify(doctorJson));
            }else{
                console.log("Each Doctor should have maximum 5 appointments per day \n Please Enter Valid Input");
                var appointmentPerDay = read.questionInt()
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

methods.allocateDoctor = function (doctorInfo) {
    // var count = 0
    var doctorDetail = doctorJson.Doctor
    // console.log("Doctor Details " + JSON.stringify(doctorDetail));
    for (let i = 0; i < doctorDetail.length; i++) {
        if (doctorDetail[i].name == doctorInfo) {
            console.log("Doctor's Details " + JSON.stringify(doctorDetail[i]));
            // count++
        } else if (doctorDetail[i].id == doctorInfo) {
            console.log("Doctor's Details " + JSON.stringify(doctorDetail[i]));
            // count++
        } else if (doctorDetail[i].specialization == doctorInfo) {
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

methods.searchPatient = function (patientInfo) {
    var patientDetail = patientJson.Patient
    // console.log("Patient Array : " + JSON.stringify(patientJson));

    for (let i = 0; i < patientDetail.length; i++) {
        // console.log("Print Name " + patientDetail[i].name);
        if (patientDetail[i].name == patientInfo) {
            console.log("Patient's Details " + JSON.stringify(patientDetail[i]))
        } else if (patientDetail[i].id == patientInfo) {
            console.log("Patient's Details " + JSON.stringify(patientDetail[i]))
        } else if (patientDetail[i].mobileNumber == patientInfo) {
            console.log("Patient's Details " + JSON.stringify(patientDetail[i]))
        }
    }
}

methods.scheduleAppointment = function (counter, doctorName) {
    // const appointment = fs.readFileSync('AppointmentJson.json', 'utf8')
    // var scheduledAppointments = JSON.parse(appointment)
    // var array = []
    // console.log("Doctor Name " + doctorName);

    for (let i = 0; i < doctorJson.Doctor.length; i++) {


        if (doctorJson.Doctor[i].name === doctorName) {
            // console.log("Loop values " + doctorJson.Doctor[i].name);

            if (doctorJson.Doctor[i].appointmentCounter >= 5) {
                // console.log("inside loop");
                var date = new Date()
                var currentDate = date.getDate() + 1
                var currentMonth = date.getMonth() + 1
                var currentYear = date.getFullYear()
                console.log("Appointment will be scheduled for Tomorrow " + currentDate + "/" + currentMonth + "/" + currentYear);
                var scheduleOption = read.questionInt("To continue Press 2 : \n");
                if (scheduleOption == 2) {
                    console.log("Appointment scheduled");
                }
            }else{
                console.log("Appointment Scheduled ");
                doctorJson.Doctor[i].appointmentCounter = doctorJson.Doctor[i].appointmentCounter + 1
                console.log("doctorJson.Doctor[i].appointmentCounter : " + doctorJson.Doctor[i].appointmentCounter);
                doctorJson.Doctor.push(doctorJson.Doctor[i].appointmentCounter)
                fs.writeFileSync('Doctor.json',JSON.stringify(doctorJson));
                // scheduledAppointments.Appointment.push(JSON.stringify(doctorJson))
                // // scheduledAppointments.Appointment.push(doctorJson)
                // fs.writeFileSync('Appointment.json',JSON.stringify(scheduledAppointments));
                
            }
        }
    }
    // console.log("doctorJson.Doctor.name " + doctorJson.Doctor.length);
}

methods.readFile = function (path) {
    const fs = require('fs')
    var jsonObject = fs.readFileSync(path)
    return JSON.parse(jsonObject)
}

methods.distributingCards = function () {
    var cardsPerUser = 0
    var cards = this.deckOfCards()
    // cardsPerUser = cards
    var user = [[], [], [], []]
    for (i = 0; i < user.length; i++) {
        for (j = 0; j < 9; j++) {
            user[i][j] = cards[j + cardsPerUser]
        }
        cardsPerUser = Math.floor(Math.random() * cards.length)
        // console.log(user[i]);

    }
    // console.log(user.join("\n"));
    console.log("Player 1 : " + user[0].join());
    console.log("Player 2 : " + user[1].join());
    console.log("Player 3 : " + user[2].join());
    console.log("Player 4 : " + user[3].join());

}

methods.deckOfCards = function () {
    var suitArray = ["Clubs", "Diamonds", "Hearts", "Spades"]
    var rankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    var cards = [], numberOfCards, shuffle;

    for (let i = 0; i < suitArray.length; i++) {
        for (let j = 0; j < rankArray.length; j++) {
            cards.push(suitArray[i] + " " + rankArray[j])
        }
    }
    // console.log(cards);
    numberOfCards = cards.length
    // console.log("Number Of Cards " + numberOfCards);
    for (let i = 0; i < numberOfCards; i++) {
        shuffle = Math.floor(Math.random() * numberOfCards)
        // console.log("Shuffle: " + shuffle);
        let temp = cards[shuffle]
        cards[shuffle] = cards[i]
        cards[i] = temp
    }

    return cards
    // console.log("Cards : " + cards.length);
}

/********** input for Stocks ************/
methods.stocksInput = function (stockJson) {
    const stock = require("./StockClass")

    var stockName = read.question("Enter Stock Name : \n")
    if (this.enterString(stockName)) {
        var noOfShare = read.questionInt("Enter Number of Shares : \n")
        var pricePerShare = read.questionInt("Enter Price Per Share : \n")
        var total = noOfShare * pricePerShare
        var object = new stock.Stock(stockName, noOfShare, pricePerShare, total)
        stockJson.StockDetails.push(object)
        console.log("Stock Json : " + JSON.stringify(stockJson));
        fs.writeFileSync('StockDetails.json', JSON.stringify(stockJson), (err) => {
            console.log(stockJson);
        });
    } else {
        console.log("Please enter valid input");
        this.stocksInput(stockJson)
    }
}

/**********User Input **********/
methods.userInput = function (userJson) {
    var user = require("./UserClass")
    var userName = read.question("Enter Your Name : \n")
    if (this.enterString(userName)) {
        var amount = read.questionInt("Enter total amount in your account : \n")
        var numberOfStocks = read.questionInt("How many Company's Stocks you have? : \n")
        for (let i = 0; i < numberOfStocks; i++) {
            var companyName = read.question("Enter Company Name " + i + ": \n")
            if (this.enterString(companyName)) {
                var countOfshares = read.questionInt("Enter Number of shares of " + companyName + " \n")
                var userObject = new user.User(userName, companyName, countOfshares, amount)
                userJson.UserDetails.push(userObject)
            } else {
                console.log("Please Enter Valid Input");
                this.userInput(userJson)
            }
        }

        fs.writeFileSync('UserDetails.json', JSON.stringify(userJson), (err) => {
            console.log(userJson);
        });
    } else {
        console.log("Please Enter Valid Input");
        this.userInput(userJson)
    }
}


/**********Buy Shares ***********/
methods.buyShare = function (stockJson, userJson) {
    var val = 0;
    var stockNameOfJson = stockJson.StockDetails
    var userNameOfJson = userJson.UserDetails
    console.log("User Json " + JSON.stringify(userNameOfJson));
    var buyerName = read.question("Enter Your Name : \n")
    if (this.enterString(buyerName)) {
        var buyerCompanyName = read.question("Which Company Share you want to buy? \n")
        if (this.enterString(buyerCompanyName)) {
            // console.log("Stock Json From Buy Shares : " + JSON.stringify(stockJson)); 
            // stockNameOfJson.forEach(element => {
            //     if (element.name == buyerCompanyName) 
            //         // console.log("Buy Share Method : " + element.name);
            //         val = element

            // });

            for (var key in stockNameOfJson) {
                if (stockNameOfJson[key].name === buyerCompanyName)
                    val = key;
            }

            var buyerNoOfShares = read.questionInt("Enter Number of Shares You Want to Buy : \n")

            for (var key1 = 0; key1 < userNameOfJson.length-1; key1++) {
                if (userNameOfJson[key1].userName === buyerName) {

                for (var key2 = 0; key2 < userNameOfJson.length-1; key2++) {
                    if (userNameOfJson[key2].companyName === buyerCompanyName) {
                        userNameOfJson[key2].countOfShares = (userNameOfJson[key2].countOfShares) + buyerNoOfShares;
                        // userJson.UserDetails.push(userNameOfJson[key1].countOfShares)
                        // console.log("userNameOfJson[key1].countOfShares " + userNameOfJson[key1].countOfShares);    
                    }
                    fs.writeFileSync("UserDetails.json", JSON.stringify(userJson));

                }
                if (userNameOfJson[key1].amount > 0) {
                    var TotalSharePrice = buyerNoOfShares * stockNameOfJson[0].pricePerShare;
                    userNameOfJson[key1].amount = userNameOfJson[0].amount - TotalSharePrice;
                    // console.log(userNameOfJson[key1].amount);
                    // userJson.UserDetails.push(userNameOfJson[key1].amount)
                    fs.writeFileSync("UserDetails.json", JSON.stringify(userJson));
                }
             }
            }

            if (buyerNoOfShares < stockNameOfJson[0].pricePerShare) {
                stockNameOfJson[val].numberOfShares = stockNameOfJson[0].numberOfShares - buyerNoOfShares;
                //console.log(StockObject[val].NoOfShares);
                // stockJson.StockDetails.push(stockNameOfJson[0].numberOfShares)
                fs.writeFileSync("StockDetails.json", JSON.stringify(stockJson));
            }

            // userNameOfJson.forEach(element1 => {
            //     if (element1.userName == buyerName && element1.companyName == buyerCompanyName) {
            //         element1.countOfShares = element1.countOfShares + buyerNoOfShares
            //         console.log("Element 1 of count of share " + element1.countOfShares);
            //         userJson.UserDetails.push(element1.countOfShares)
            //         // console.log("Element 1 of amount " + element1.amount);

            //         // console.log("Element 2 of count of share " + element2.countOfShares);
            //     }

            //     fs.writeFileSync('UserDetails.json', JSON.stringify(userJson), (err) => {
            //         console.log(userJson);
            //     });

            // })

            // console.log("User name of json amount" + JSON.stringify(userNameOfJson));
            // for (let i = 0; i < userNameOfJson.length; i++) {
            // var temp = JSON.stringify(stockNameOfJson.pricePerShare)
            // console.log("TEMP : " + temp);

            // for (let j = 0; j < JSON.stringify(stockNameOfJson).length; j++) {
            // console.log("Stack Name of Json " + JSON.stringify(stockNameOfJson.pricePerShare));

            //    var temp =  parseInt(userNameOfJson[i].amount)
            // console.log("Temp Value: " + userNameOfJson[i].amount);

            // if (userNameOfJson[i].amount > 0) {

            //     // console.log("Stock name of json ");

            //     var totalPrice = stockNameOfJson[i].pricePerShare * buyerNoOfShares
            //     console.log("Total Price : " + totalPrice);
            //     userNameOfJson[i].amount = userNameOfJson[i].amount - totalPrice
            //     console.log("Element 1 of amount : " + userNameOfJson[i].amount);
            // console.log("Element 1 of Amount " + element1.amount);

            // }
            // userJson.UserDetails.push(userNameOfJson[i].amount)

            // fs.writeFileSync('UserDetails.json', JSON.stringify(userJson), (err) => {
            //     console.log(userJson);
            // });
            // // }


            // }

            // stockNameOfJson = stockJson.StockDetails
            // console.log("Stock of Json " + JSON.stringify(stockNameOfJson)); 

            // if (buyerNoOfShares < stockNameOfJson.numberOfShares) {
            //     stockNameOfJson.numberOfShares = stockNameOfJson.numberOfShares - buyerNoOfShares
            //     stockNameOfJson.push(stockNameOfJson.numberOfShares)
            //     console.log("Stock Details number of share " + JSON.stringify(stockJson));
            // }

            // fs.writeFileSync('UserDetails.json', JSON.stringify(userJson), (err) => {
            //     console.log(userJson);
            // });

            var date = new Date()
            var dateTime = (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
            console.log("Date and Time : " + dateTime);
        } else {
            console.log("Please Enter Valid Input");
            this.buyShare(stockJson, userJson)
        }
    } else {
        console.log("Please Enter Valid Input");
        this.buyShare(stockJson, userJson)
    }
}


methods.sellShare = function (stockJson, userJson) {
    var val = 0
    var stockNameOfJson = stockJson.StockDetails
    var userNameOfJson = userJson.UserDetails
    var sellerName = read.question("Enter Your Name : \n")
    if (this.enterString(sellerName)) {
        var sellerCompanyName = read.question("Which Company Share you want to Sell? \n")
        if (this.enterString(sellerCompanyName)) {
            for (var key in stockNameOfJson) {
                if (stockNameOfJson[key].name === sellerCompanyName)
                    val = key;
            }
            var sellerNumberOfShare = read.questionInt("Enter no. of share you want to sell");
            for (var key1 = 0; key1 < userNameOfJson.length-1; key1++) {
                if (userNameOfJson[key1].userName === sellerName) {
                    for (var key2 = 0; key2 < userNameOfJson.length-1; key2++) {
                        if (userNameOfJson[key2].companyName === sellerCompanyName) {
                            userNameOfJson[key2].countOfShares = (userNameOfJson[key2].countOfShares) - sellerNumberOfShare;
                            // userJson.UserDetails.push(userNameOfJson[key1].countOfShares)

                        }
                        fs.writeFileSync("UserDetails.json", JSON.stringify(userJson));
                    }
                    var TotalSharePrice = sellerNumberOfShare * stockNameOfJson[key1].pricePerShare;
                    userNameOfJson[key1].amount = userNameOfJson[key1].amount + TotalSharePrice;
                    // console.log(userNameOfJson[key1].amount);
                    // userJson.UserDetails.push(userNameOfJson[key1].amount)
                    fs.writeFileSync("UserDetails.json", JSON.stringify(userJson));

                }

            }

            if (sellerNumberOfShare < stockNameOfJson[0].numberOfShares) {
                stockNameOfJson[0].numberOfShares = stockNameOfJson[0].numberOfShares + sellerNumberOfShare;
                //console.log(StockObject[val].NoOfShares);
                // stockJson.StockDetails.push(stockNameOfJson[0].numberOfShares)
                fs.writeFileSync("StockDetails.json", JSON.stringify(stockJson));
            }
            var date = new Date();
            var dateTime = (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
            console.log("Transaction done at : " + dateTime);
        } else {
            console.log("Please Enter Valid Input");
            this.sellShare(stockJson, userJson)
        }
    } else {
        console.log("Please Enter Valid Input");
        this.sellShare(stockJson, userJson)
    }
}

methods.userInputForAddress = function () {
    var addressbook = require("./AddressClass")
    var firstName = read.question("Enter Your First Name : \n")
    let temp = this.enterString(firstName)
    if (temp == true) {
        lastName = read.question("Enter Your Last Name : \n")
        let temp = this.enterString(lastName)
        if (temp == true) {
            address = read.question("Enter Your Address : \n")
            city = read.question("Enter Your City : \n")
            let tempVar = this.enterString(city)
            if (tempVar == true) {
                state = read.question("Enter Your State : \n")
                let temp = this.enterString(state)
                if (temp == true) {
                    zipCode = read.questionInt("Enter Zip Code : \n")
                    if (zipCode.toString().length === 6) {
                        phoneNumber = read.questionInt("Enter Your Phone Number : \n")
                        if (phoneNumber.toString().length == 10) {
                            var object = new addressbook.AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber)
                            // readFromFile()
                            return object
                            // return myJson
                        } else {
                            console.log("Please Enter Valid 10 Digit Mobile Number ");
                            this.userInputForAddress()
                        }
                    } else {
                        console.log("Please Enter Valid Input ");
                        this.userInputForAddress()
                    }
                    // array.push(object)

                } else {
                    console.log("Please Enter Valid Input ");
                    this.userInputForAddress()
                }
            } else {
                console.log("Please Enter Valid Input ");
                this.userInputForAddress()
            }
        } else {
            console.log("Please Enter Valid Input ");
            this.userInputForAddress()
        }
    } else {
        console.log("Please Enter Valid Input ");
        this.userInputForAddress()
    }
}


methods.displayAllAddress = function (myJson) {

    personRecord = myJson.AddressBook
    for (let i = 0; i < personRecord.length; i++) {
        for (let j = i + 1; j < personRecord.length; j++) {
            if (personRecord[i].lastName > personRecord[j].lastName) {
                let temp = personRecord[i]
                personRecord[i] = personRecord[j]
                personRecord[j] = temp
            }
        }
    }

    console.log("----------------------------------------------------------------------------");
    console.log("FirstName" + " " + "LastName " + " " + "Address " + " " + "City " + " " + "State " + " " + "ZipCode " + " " + "PhoneNumber");
    console.log("----------------------------------------------------------------------------");
    //   console.log("Person Record " + personRecord);

    for (let i = 0; i < personRecord.length; i++) {
        console.log(personRecord[i].firstName + "     " + personRecord[i].lastName + "     " + personRecord[i].address + "     " + personRecord[i].city + "     " + personRecord[i].state + "     " + personRecord[i].zipCode + "     " + personRecord[i].phoneNumber);
        console.log();
    }

}

// methods.deleteDataFromAddress = function(array, deleteKey, myJson) {
//     person = array
//     var arrayDemo = []
//     // console.log("Array Elements " + JSON.stringify(per));
//     for(let i = 0 ; i < JSON.stringify(myJson.AddressBook).length; i++){
//         arrayDemo[i] = myJson.AddressBook[i]
//     }

//     console.log("Array Demo " + arrayDemo);

//     for (let i = 0; i < person.length; i++) {
//         console.log("Array First Name " +  person[i].firstName);
//         if (person[i].firstName == deleteKey) {
//             // console.log("Array First Name in loop" + person[i].firstName);
//             JSON.stringify(person).splice(i, 1)
//             console.log("Person : " + JSON.parse(person));
//             myJson.AddressBook.push(JSON.stringify(person))
//         }
//     }
//     fs.writeFile('AddressJson.json', JSON.stringify(myJson), (err) => {
//         console.log("Remaining Data " + myJson);        
//     });
// }


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