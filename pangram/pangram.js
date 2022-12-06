//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  input = input.toLowerCase();
  const pangram =
    input.includes("a") &&
    input.includes("b") &&
    input.includes("c") &&
    input.includes("d") &&
    input.includes("e") &&
    input.includes("f") &&
    input.includes("g") &&
    input.includes("h") &&
    input.includes("i") &&
    input.includes("j") &&
    input.includes("k") &&
    input.includes("l") &&
    input.includes("m") &&
    input.includes("n") &&
    input.includes("o") &&
    input.includes("p") &&
    input.includes("q") &&
    input.includes("r") &&
    input.includes("s") &&
    input.includes("t") &&
    input.includes("u") &&
    input.includes("v") &&
    input.includes("w") &&
    input.includes("x") &&
    input.includes("y") &&
    input.includes("z");
  return pangram;
};
