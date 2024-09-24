// Complete this js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype for SportsCar
SportsCar.prototype = Object.create(Car.prototype);

// Correct the constructor reference for SportsCar
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change code below this line
window.Car = Car;
window.SportsCar = SportsCar;
