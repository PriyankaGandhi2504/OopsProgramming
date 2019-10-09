class AddressBook{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phoneNumber = phoneNumber
    }
}

module.exports = {AddressBook}