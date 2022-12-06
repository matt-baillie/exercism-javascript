//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (param1) => {
  const gs = 1e12;
  let date = new Date(param1).getTime();

  return new Date(date + gs);
};
