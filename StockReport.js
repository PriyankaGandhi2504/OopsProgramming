/*
* 3. Stock Report
a. Desc -> Write a program to read in Stock Names, Number of Share, Share Price.
Print a Stock Report with total value of each Stock and the total value of Stock.
b. I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of
Share, and Share Price
c. Logic -> Calculate the value of each stock and the total value
d. O/P -> Print the Stock Report.
e. Hint -> Create Stock and Stock Portfolio Class holding the list of Stocks read
from the input file. Have functions in the Class to calculate the value of each
stock and the value of total stocks

Author Name : Priyanka Gandhi
Date : 09/10/2019
*/

const input = require("./OopsUtility")
const read = require("readline-sync")
const fs = require('fs')
var inventoryManagement = fs.readFileSync('Stocks.json', 'utf8')
var myJson = JSON.parse(inventoryManagement)
var stockClass = require("./StockClass")
var stock = new stockClass.Stock()


var shareName; var numberOfShare; var sharePrice; var numberOfStocks
var array = []; var total; var stockObject;
console.log("Please enter the number of stocks : ");
numberOfStocks = read.questionInt()
userInputs(numberOfStocks)

function userInputs(numberOfStocks){
    for (i = 0; i < numberOfStocks; i++){
        console.log("Enter Name of Share " + (i+1));
        shareName = read.question()
        let temp = input.data.enterString(shareName)
        
        if(temp === true){
            
            numberOfShare = read.questionInt("Enter Number of Share \n")
            sharePrice = read.questionInt("Enter Price of 1 Share \n")
            total = numberOfShare * sharePrice

            var object = {
                "name" : shareName,
                "numberOfShare" : numberOfShare,
                "sharePrice" : sharePrice,
                "total" : total
            }
           
            // console.log("Array object : " + JSON.stringify(object));
            array.push(object)     
        }else{
            console.log("Please enter Share Name");
            userInputs(numberOfStocks)
        }    
    }
    updateValues(array)  
}


function updateValues(array){
    myJson.Stocks.push(array)
    fs.writeFile('Stocks.json', JSON.stringify(myJson), (err) => {
        console.log(JSON.stringify(myJson));
    }) 
}
