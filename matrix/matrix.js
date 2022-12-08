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
    console.log(this.rows);
    // this.matrixArray[0].map((_, i) => {
    //   console.log(this.matrixArray[i]);
    //   this.matrixArray.map((row) => {
    //     // console.log(row[i]);

    //     row[i];
    //   });
    // });

    // get rows();
  }
}
