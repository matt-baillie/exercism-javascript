//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (resistors) => {
  console.log(
    String(COLORS[resistors[0]]).concat(String(COLORS[resistors[1]]))
  );
  return Number(
    String(COLORS[resistors[0]]).concat(String(COLORS[resistors[1]]))
  );
};
export const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
