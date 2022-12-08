//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// separate by \n and by space
export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.matrixArray = matrix
      .split("\n")
      .map((row) => row.split(" ").map((number) => parseInt(number)));
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    return this.matrixArray[0].map((el, i) => {
      return this.rows.map((row) => {
        return row[i];
      });
    });

    // get rows();
  }
}
