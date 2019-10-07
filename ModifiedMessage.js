// const input = require("./OopsUtility")
// const read = require("readline-sync")

var regEx = "Hello <<name>> , We have your fullname as <<full name>> in our system, Your contact number is 91-xxxxxxxxxx . Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016"
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


// for(i = 0; i < splitArrayForDate.length; i++){

// }

// // console.log("Current Date : " + currentdate + "/" + currentmonth + "/" + currentyear);


















var str = 'table football';
var regex = RegExp('foo*');
var globalRegex = RegExp('foo*','g');
console.log(regex.test(str));

var regex = RegExp('name*');
var string = RegExp('name', 'g')
console.log(regex.test(regEx));
