/* You are a new developer at SoundIt, your first task is to create 10 objects for a car that has properties maker, brand, year, colour, and number Of Seats. It also has the following methods brake, start, change gear, get info and horn. Using your understanding of OOP, write a industry standard code that is easily reusable and maintainable.
*/
var Car = /** @class */ (function () {
    function Car(maker, brand, year, colour, numberOfSeats) {
        this.maker = maker;
        this.brand = brand;
        this.year = year;
        this.colour = colour;
    }
    Car.prototype.brake = function () {
        console.log("".concat(this.maker, "-").concat(this.brand, " is braking!"));
    };
    Car.prototype.start = function () {
        console.log("".concat(this.maker, "-").concat(this.brand, " is starting the engine!"));
    };
    Car.prototype.changeGear = function (gear) {
        console.log("".concat(this.maker, "-").concat(this.brand, " is changing gear to ").concat(gear));
    };
    Car.prototype.getInfo = function () {
        console.log("".concat(this.maker, "-").concat(this.brand, " model ").concat(this.year, " with colour ").concat(this.colour, " made in the year ").concat(this.year, " with ").concat(this.numberOfSeats, " seats"));
    };
    Car.prototype.horn = function () {
        console.log("".concat(this.maker, "-").concat(this.brand, " is honking the horn!"));
    };
    return Car;
}());
var ngProductionLine = [
    [new String("toyota"), new String("corolla"), new Number(2004),
        new String("black"), new Number(4)],
    [new String("honda"), new String("accord"), new Number(2005),
        new String("white"), new Number(6)],
    [new String("nissan"), new String("bluebird"), new Number(1995),
        new String("ash"), new Number(5)],
    [new String("mercedes"), new String("glx"), new Number(2022),
        new String("silver"), new Number(8)]
];
var newCar;
for (var i = 0; i < ngProductionLine.length; i++) {
    newCar = new Car(JSON.stringify(ngProductionLine[i][0]), JSON.stringify(ngProductionLine[i][1]), Number(ngProductionLine[i][2]), JSON.stringify(ngProductionLine[i][3]), Number(ngProductionLine[i][4]));
    newCar.brake(); // Braking!
    newCar.start(); // Starting the engine!
    newCar.changeGear(3); // Changing gear to 3
    newCar.getInfo(); // This car is made by Ford
    newCar.horn(); // Honking the horn!
}
