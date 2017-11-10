function getNewCar() {
    var newCar = {
      city: 'Toronto',
      passenger: 0,
      gas: 100
    }
  return newCar;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}
