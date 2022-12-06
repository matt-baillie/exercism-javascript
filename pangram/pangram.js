//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  input = input.toLowerCase();
  const pangram = [..."abcdefghijklmnopqrstuvwxyz"].every((c) =>
    input.includes(c)
  );

  return pangram;
};
