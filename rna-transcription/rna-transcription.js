//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (strand) => {
  let compliments = "";

  compliments.concat("C");
  for (let letter of strand) {
    switch (letter) {
      case "G":
        compliments = compliments.concat("C");
        break;
      case "C":
        compliments = compliments.concat("G");
        break;
      case "T":
        compliments = compliments.concat("A");
        break;
      case "A":
        compliments = compliments.concat("U");

        break;
      default:
        console.log("Triggered default");
        break;
    }
  }
  // console.log(compliments.concat("C"));
  return compliments;
};
