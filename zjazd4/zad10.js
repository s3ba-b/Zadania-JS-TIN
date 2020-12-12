class Car {

    constructor(year, mileage, starting_price) {
        this.year = year
        this.mileage = mileage
        this.starting_price = starting_price
        this.final_price = starting_price
    }
    
    IncreaseStartingPriceBy1000() {
        this.starting_price += 1000
    }

    LowerFinalPriceBy1000ForEachYear() {
        this.final_price -= 1000 * (2020-this.year)
    }

    LowerFinalPriceBy1000ForEach100000km() {
        this.final_price -= 1000 * (this.mileage/100000)
    }

    ChangeMileageAndYear(mileage, year) {
        this.mileage = mileage
        this.year = year
        this.LowerFinalPriceBy1000ForEachYear()
        this.LowerFinalPriceBy1000ForEach100000km()
    }
}

class Cars {

    constructor(carArray) {
        this.carArray = carArray
    }

    WriteToCarArray(car) {
        if(car.final_price > 10000)
            this.carArray.push(car)
    }

    IncreaseYearByOneForEachCarHelper(car) {
        car.year += 1
    }

    IncreaseYearByOneForEachCar() {
        this.carArray.forEach(this.IncreaseYearByOneForEachCarHelper)
    }
}

car = new Car(2005, 300000, 50000)
console.log("%d %d %d %d", car.year, car.mileage, car.starting_price, car.final_price)

car.IncreaseStartingPriceBy1000()
console.log("%d %d %d %d", car.year, car.mileage, car.starting_price, car.final_price)

car.LowerFinalPriceBy1000ForEachYear()
console.log("%d %d %d %d", car.year, car.mileage, car.starting_price, car.final_price)

car.LowerFinalPriceBy1000ForEach100000km()
console.log("%d %d %d %d", car.year, car.mileage, car.starting_price, car.final_price)

car.ChangeMileageAndYear(150000, 2008)
console.log("%d %d %d %d", car.year, car.mileage, car.starting_price, car.final_price)

cars = new Cars([])
console.log(cars.carArray)

cars.WriteToCarArray(car)
console.log(cars.carArray)

cars.IncreaseYearByOneForEachCar()
console.log(cars.carArray)