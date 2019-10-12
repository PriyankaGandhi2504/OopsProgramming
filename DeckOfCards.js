/**
* 9. Write a Program ​ DeckOfCards.java ​ , to initialize deck of cards having suit ("Clubs", 
"Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", 
"Queen", "King", "Ace"). Shuffle the cards using Random method and then distribute 9 Cards to 4 
Players and Print the Cards received by the 4 Players using 2D Array...

Author Name : Priyanka Gandhi
Date : 11/10/2019
 */

const read = require("readline-sync")
const input = require("./OopsUtility")


class DeckOfCards{
    deckOfCards(){
        input.data.distributingCards()
    }
}
module.exports = {DeckOfCards}

var doc = new DeckOfCards()
doc.deckOfCards()