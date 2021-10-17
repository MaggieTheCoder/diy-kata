const humanCatDogYears = number => {
  let catYears = 0;
  let dogYears = 0;
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (number === 2) {
    catYears = 24;
    dogYears = 24;
  } else if (number >= 3) {
     //number - 2 to get rid of first two years//
     // if number = 3; catYears = 28, 
    catYears = 4 * (number - 2) + 24;
    dogYears = 5 * (number - 2) + 24;
  }
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
