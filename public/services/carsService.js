let cars = require("../api/cars.json");

export const carsService = {
  getAll,
  getById,
};

function getAll() {
  return cars;
}

function getById(id) {
  return cars.find((car) => car.id === id);
}
