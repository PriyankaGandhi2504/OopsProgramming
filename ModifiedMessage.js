/**
* 2. Regular Expression Demonstration
a. Desc -> Read in the following message: Hello <<name>>, We have your full
name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
Use Regex to replace name, full name, Mobile#, and Date with proper value.
b. I/P -> read in the Message
c. Logic -> Use Regex to do the following
    i. Replace <<name>> by first name of the user ( assume you are the user)
    ii. replace <<full name>> by user full name.
    iii. replace any occurance of mobile number that should be in format
        91-xxxxxxxxxx by your contact number.
    iv. replace any date in the format XX/XX/XXXX by current date.
d. O/P -> Print the Modified Message.

Author Name : Priyanka Gandhi
Date : 09/10/2019
*/

const input = require("./OopsUtility")
const read = require("readline-sync")

var reg1 = "Hello <<name>> , We have your fullname as <<full name>> in our system, Your contact number is 91-xxxxxxxxxx . Please,let us know in case of any clarification Thank you BridgeLabz 01-01-2016"
reg1 = input.data.validateName(reg1)
// console.log(reg1);
reg1 = input.data.validateFullName(reg1)
// console.log(reg1);
reg1 = input.data.validateNumber(reg1)
// console.log(reg1);
reg1 = input.data.validateDate(reg1)
// console.log(reg1);









// // var testFullNameInput = console.log(reg3.test(reg1));

// reg1 = input.data.replaceFullName(reg1, reg3, fullName)
// console.log(reg1);

// // var testdate = /\d\d-\d\d-\d\d\d\d/
// reg1 = input.data.testDate(reg1, testdate)

// var testMobileNumberInput = /([6-9]+)([0-9]+)/
// // var mobileNum = /^[0]?[789]\d{9}$/
// var mobileNum = /\xxxxxxxxxx/
// console.log("Please enter mobile number");
// var mobileNumber = []
// mobileNumber = read.questionInt()
// var testMobileNumber = mobileNum.test(mobileNumber)
// console.log(testMobileNumber);

// // reg1 = input.data.replaceMobileNumber(reg1, mobileNum, mobileNumber)
// console.log(reg1);


    // } else {
    //     console.log("Please Enter Valid 10 Digit Mobile Number");
    //     replaceMobileNumber(reg1, mobileNum, mobileNumber)
    // }






// var pattern = /'\d*'/
// console.log(pattern.test(x));


// var name = "pihu"
// console.log("pihu".replace("p","t"));


// const input = require("./OopsUtility")
// const read = require("readline-sync")


// var regEx = "Hello <<name>> , We have your fullname as <<full name>> in our system, Your contact number is 91-xxxxxxxxxx . Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016"
// var date = new Date()
// var currentdate = date.getDate()
// var currentmonth = date.getMonth() + 1
// var currentyear = date.getFullYear()
// var splitArrayForDate = []
// console.log("Please Enter your Name:  ");
// var name = read.question()
// // var n = demostring.search(/<<name>>/i)
// var regEx = regEx.replace(/<<name>>/i, name)


// console.log("Please Enter Your Full Name : ");
// var fullName = read.question()
// regEx = regEx.replace(/<<full name>>/i, fullName)
// regEx.test()


// // var number = read.questionInt()
// // demostring = demostring.replace(/uxxxxxxxxxx/, number)


// console.log("Replace name " + regEx);


// splitArrayForDate = '01/01/2016'.split('/')
// console.log("Split Date " + splitArrayForDate);


// // console.log("Current Date : " + currentdate + "/" + currentmonth + "/" + currentyear);


// var str = 'table football';
// var regex = RegExp('foo*');
// var globalRegex = RegExp('foo*','g');
// console.log(regex.test(str));

// var regex = RegExp('name*');
// var string = RegExp('name', 'g')
// console.log(regex.test(regEx));