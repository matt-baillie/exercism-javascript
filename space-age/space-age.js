//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, date) => {
  let earthAge = date / 31557600;
  let age;
  switch (planet) {
    case "earth":
      console.log(planet, date);
      age = earthAge;
      break;
    case "mercury":
      age = earthAge / 0.2408467;
      break;
    case "venus":
      age = earthAge / 0.61519726;
      break;
    case "mars":
      age = earthAge / 1.8808158;
      break;
    case "jupiter":
      age = earthAge / 11.862615;
      break;
    case "saturn":
      age = earthAge / 29.447498;
      break;
    case "uranus":
      age = earthAge / 84.016846;
      break;
    case "neptune":
      age = earthAge / 164.79132;
      break;
    default:
      break;
  }
  console.log(age.toFixed(2));
  return parseFloat(age.toFixed(2));
};
