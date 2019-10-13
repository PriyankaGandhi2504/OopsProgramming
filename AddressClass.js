class AddressBook{
    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.phoneNumber= phoneNumber
    }
}
module.exports = {AddressBook}