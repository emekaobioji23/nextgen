/* You are a new developer at SoundIt, your first task is to create 10 objects for a car that has properties maker, brand, year, colour, and number Of Seats. It also has the following methods brake, start, change gear, get info and horn. Using your understanding of OOP, write a industry standard code that is easily reusable and maintainable.
*/
class Car {
    maker: string;
    brand:string;
    year:number;
    colour:string;
    numberOfSeats:number;

    constructor(maker:string, brand:string, year:number, colour:string, numberOfSeats:number) {
      this.maker = maker;
      this.brand = brand;
      this.year = year;
      this.colour = colour;
      
    }
  
    brake() {
      console.log(`${this.maker}-${this.brand} is braking!`);
    }
  
    start() {
      console.log(`${this.maker}-${this.brand} is starting the engine!`);
    }
  
    changeGear(gear: number) {
      console.log(`${this.maker}-${this.brand} is changing gear to ${gear}`);
    }
  
    getInfo() {
      console.log(`${this.maker}-${this.brand} model ${this.year} with colour ${this.colour} made in the year ${this.year} with ${this.numberOfSeats} seats`);
    }
  
    horn() {
      console.log(`${this.maker}-${this.brand} is honking the horn!`);
    }
  }
  
  let ngProductionLine:object[][] = [
    [new String("toyota"), new String("corolla"), new Number(2004), 
    new String("black"), new Number(4)],
    [new String("honda"), new String("accord"), new Number(2005), 
    new String("white"), new Number(6)],
    [new String("nissan"), new String("bluebird"), new Number(1995), 
    new String("ash"), new Number(5)],
    [new String("mercedes"), new String("glx"), new Number(2022), 
    new String("silver"), new Number(8)]
  ];
  let newCar: Car;
  for(var i = 0; i <ngProductionLine.length; i++){
    newCar = new Car(JSON.stringify(ngProductionLine[i][0]), JSON.stringify(ngProductionLine[i][1]), Number(ngProductionLine[i][2]), JSON.stringify(ngProductionLine[i][3]), Number(ngProductionLine[i][4]));
    newCar.brake(); // Braking!
    newCar.start(); // Starting the engine!
    newCar.changeGear(3); // Changing gear to 3
    newCar.getInfo(); // This car is made by Ford
    newCar.horn(); // Honking the horn!
  }
  