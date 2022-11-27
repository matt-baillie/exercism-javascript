// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

// 3)
export class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.screenSize = new Size(800, 600);
    this.position = new Position();
  }
  // 4)
  resize(newSize) {
    let width = newSize.width > 1 ? newSize.width : 1;
    let height = newSize.height > 1 ? newSize.height : 1;

    let maxResizeHeight = this.screenSize.height - this.position.y;
    height = maxResizeHeight > height ? height : maxResizeHeight;

    let maxResizeWidth = this.screenSize.width - this.position.x;
    width = maxResizeWidth > width ? width : maxResizeWidth;

    this.size.width = width;
    this.size.height = height;
  }
  move(newPosition) {
    // Adjuts position

    newPosition.x = newPosition.x < 0 ? 0 : newPosition.x;
    newPosition.y = newPosition.y < 0 ? 0 : newPosition.y;
    // maxPosition determined by current window size
    // sizeX: 800 - 250 = 550
    newPosition.x =
      newPosition.x + this.size.width < this.screenSize.width
        ? newPosition.x
        : this.screenSize.width - this.size.width;

    newPosition.y =
      newPosition.y + this.size.height < this.screenSize.height
        ? newPosition.y
        : this.screenSize.height - this.size.height;
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  }
}

export function changeWindow(newProgramWindow) {
  console.log(newProgramWindow);

  newProgramWindow.resize(new Size(400, 300));
  newProgramWindow.move(new Position(100, 150));
  console.log(newProgramWindow.size);
  return newProgramWindow;
}
