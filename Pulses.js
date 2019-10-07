class Pulses{
    constructor(name, weight, pricePerKg){
        this.name = name
        this.weight = weight
        this.pricePerKg = pricePerKg
    }

    add(name, weight, pricePerKg){
        this.name = name
        this.weight = weight
        this.pricePerKg = pricePerKg
        return (this.name + " " + this.weight + " " + this.pricePerKg)
    }

    totalQuantity(weight, pricePerKg){
        var total = this.weight * this.pricePerKg
        return total
    }
}
module.exports = {Pulses}