const val = require("./FactoryPattern")

const user1 = val.hospitalFactory('Doctor', 'Abc Hospital', 'pihu', 23, 'F', 38, 'Abc')
const user2 = val.hospitalFactory('Patient', 'neha', 22, 'F')

console.log("User 1 : " + user1);
console.log("User 2 : " + user2);