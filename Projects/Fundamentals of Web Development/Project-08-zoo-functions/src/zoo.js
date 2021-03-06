/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');
const { animals, employees, hours, prices } = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // Find the specie that have the same name as our 'animal' parameter and
  // then get all the 'residents' from
  return animals.find(specie => specie.name === animal).residents
  // See if every 'specificAnimal age' from our
  // 'animal specie' is equal or greater than 'age' parameter
    .every(specificAnimal => specificAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(employee => employee.firstName === employeeName
    || employee.lastName === employeeName);
}
// console.log(employeeByName('Nigel'));

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}
// On this function below i got help from Mário Duarte to understand the logic.
function animalCount(species) {
  // here i defined an constant, it's an object and will be our answer.
  let countResult = {};
  // The first condition is if our parameter 'species' is undefined.
  if (!species) {
    // We'll pass by each animal on our array of animals.
    animals.forEach((animal) => {
      // for each animal we'll create a constant with the name value and residents value
      const { name, residents } = animal;
      // then we'll add to our answer 'countResult' the 'name' as a key and the length of our
      // residents as value of this key.
      countResult[name] = residents.length;
    });
    // if we have a defined 'species' parameter like 'lions' we'll do the below.
  } else {
    // we'll find the animal that has the name equal to the parameter 'species', then we'll get
    // the array of residents of this finded animal and finally gets the array length and set it as
    // our answer 'countResult'.
    countResult = animals.find(animal => animal.name === species).residents.length;
  }
  // At final we'll return our answer
  return countResult;
}

function entryCalculator(entrants) {
  let totalRevenue = 0;
  if (!entrants) {
    return totalRevenue;
  }
  Object.keys(entrants).forEach((key, index) => {
    totalRevenue += prices[key] * Object.values(entrants)[index];
  });
  return totalRevenue;
}

function animalMap(options) {
  // seu código aqui
}

// This function I made like resolved in a class by teacher Gabriel Oliva.
function schedule(dayName) {
  const weekDays = Object.keys(hours);
  const result = {};

  weekDays.forEach((day) => {
    if (day === 'Monday') {
      result[day] = 'CLOSED';
    } else {
      const openingHour = hours[day].open;
      const closingHour = hours[day].close - 12;

      result[day] = `Open from ${openingHour}am until ${closingHour}pm`;
    }
  });
  if (!dayName) {
    return result;
  }
  return { [dayName]: result[dayName] };
}

function oldestFromFirstSpecies(id) {
  // Search for first Specie that my 'id' employee take care
  const firstSpecie = employees
    .find(employee => employee.id === id).responsibleFor[0];
  // Find the oldest animal that is in this first specie founded
  const oldestAnimal = animals
    // First we find the residents from the first Specie
    .find(animal => animal.id === firstSpecie).residents
    // Reduce to find the oldest one between the residents
    .reduce((accumulator, currentValue) => (accumulator.age > currentValue.age
      ? accumulator : currentValue));
  // Once we found the oldest animal in the specific specie we return it's values
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  // First we access our normal entrance prices
  const normalPrices = Object.keys(prices);
  // For each normal price we gonna add the passed 'percentage'
  normalPrices.forEach((price) => {
    prices[price] = Math.round(((prices[price] * (percentage / 100)) + prices[price]) * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
