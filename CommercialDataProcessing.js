/**
 * 5. Commercial data processing ​ - StockAccount.java implements a data type that
might be used by a financial institution to keep track of customer information. The
StockAccount class implements following methods.
The StockAccount class also maintains a list of CompanyShares object which has
Stock Symbol and Number of Shares as well as DateTime of the transaction. When
buy or sell is initiated StockAccount checks if CompanyShares are available and
accordingly update or create an Object.

Author Name : Priyanka Gandhi
Date : 12/10/2019
 */

const input = require("./OopsUtility")
const read = require("readline-sync")
var fs = require('fs')
var stock = fs.readFileSync('StockDetails.json', 'utf8')
var stockJson = JSON.parse(stock)
var user = fs.readFileSync('UserDetails.json', 'utf8')
var userJson = JSON.parse(user)

class StockAccount {

    displayOptions() {
        console.log("Select an option : \n 1. Create a new Account \n 2. Add new user \n 3. Buy Shares \n 4. Sell Shares \n 5. Display all Stocks and Values \n 6. Display User Data \n ");
        var switchOption = read.questionInt()
        stock.performOperation(switchOption)
    }

    performOperation(switchOption) {
        switch (switchOption) {
            case 1:
                input.data.stocksInput(stockJson)
                break;
            case 2:
                input.data.userInput(userJson)
                break
            case 3:
                input.data.buyShare(stockJson, userJson)
                break
            case 4:
                input.data.sellShare(stockJson, userJson)
                break
            case 5:
                console.log("File Data : " + JSON.stringify(stockJson));
                break
            case 6:
                console.log("File Data : " + JSON.stringify(userJson));
                break

            default:
                console.log("Invalid Input");
        }
        var continueSwitch = read.questionInt("Do You Want To Continue, then Press 1 else press any key to exit \n")
        if (continueSwitch == 1) {
            this.displayOptions()
        }
    }
}
module.exports = { StockAccount }

var stock = new StockAccount
stock.displayOptions()