function isSudokuValid(board) {
    // Check rows
    for (let row of board) {
      if (!isValidArray(row)) {
        return false;
      }
    }
  
    // Check columns
    for (let i = 0; i < 9; i++) {
      let column = [];
      for (let j = 0; j < 9; j++) {
        column.push(board[j][i]);
      }
      if (!isValidArray(column)) {
        return false;
      }
    }
  
    // Check 3x3 grids
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let grid = [];
        for (let x = i; x < i + 3; x++) {
          for (let y = j; y < j + 3; y++) {
            grid.push(board[x][y]);
          }
        }
        if (!isValidArray(grid)) {
          return false;
        }
      }
    }
  
    // All arrays are valid
    return true;
  }
  
  function isValidArray(arr) {
    let set = new Set(arr);
    set.delete(0); // 0 is not a valid number in Sudoku
    return set.size === arr.length;
  }
  
  // Tests
  let puzzle = [
    [8,9,5,7,4,2,1,3,6],
    [2,7,1,9,6,3,4,8,5],
    [4,6,3,5,8,1,7,9,2],
    [9,3,4,6,1,7,2,5,8],
    [5,1,7,2,3,8,9,6,4],
    [6,8,2,4,5,9,3,7,1],
    [1,5,9,8,7,4,6,2,3],
    [7,4,6,3,2,5,8,1,9],
    [3,2,8,1,9,6,5,4,7]
  ];
  
  let p8zzle = [
    [8,9,5,7,4,2,1,3,6],
    [8,7,1,9,6,3,4,8,5],
    [4,6,3,5,8,1,7,9,2],
    [9,3,4,6,1,7,2,5,8],
    [5,1,7,2,3,8,9,6,4],
    [6,8,2,4,5,9,3,7,1],
    [1,5,9,8,7,4,6,2,3],
    [7,4,6,3,2,5,8,1,9],
    [3,2,8,1,9,6,5,4,7]
  ];
  
  console.log(isSudokuValid(puzzle)); // true
  console.log(isSudokuValid(p8zzle)); // false
  
