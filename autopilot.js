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

function pickUpPassenger(car) {
  car.passenger += 1;
  car.gas -= 10;
}

// tried with switch
function getDestination(car) {
  switch (car.city) {
    case 'Toronto':
      return 'Mississauga'
      break;
    case 'Mississauga':
      return 'London'
      break;
    case 'London':
      return 'Toronto'
      break;
  }
}

function getGasDisplay() {

}

function fillUpGas(car) {
  var oldGas = car.gas
  car.gas = 100
  console.log("Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + ".");
}
