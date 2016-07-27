import _map from 'lodash.map';

const createNewBoard = (width, height) => {
  const board = [];
  // for each unit of height
  for (let i = 0; i < height; i++){
    board.push([]);
    // create a row with a width === width
    for (let j = 0; j < width; j++) {
      board[i][j] = zeroOrOne();
    }
  }
  return board;
}

const passTheTime = (board) => { 

  let newBoard = _map(board, (row, rowPosition) => {

    let newRow = _map(row, (tile, index) => {

      //we must count the tiles neighbors
      let numberOfNeighbors = 0;

      /////////////////
      // if the tile appears in the first row
      if (rowPosition === 0) {

        // and is the leftmost tile
          if (index === 0) {
            // check the tile to the right
            if (board[rowPosition][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[rowPosition + 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[rowPosition + 1][index] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // or is the rightmost tile
          if (index === rowPosition.length - 1) {
            // check the tile to the left
            if (board[rowPosition][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[rowPosition + 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
             // check the tile to the bottom
            if (board[rowPosition + 1][index] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // otherwise 
          if (index !== 0 && index !== rowPosition.length - 1) {
            // check the tile to the right
            if (board[rowPosition][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[rowPosition + 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[rowPosition + 1][index] == 1) {
              numberOfNeighbors += 1;
            } 
            // check the tile to the left
            if (board[rowPosition][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[rowPosition + 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
          }

      // console.log("first", numberOfNeighbors);

      }     

      /////////////////
      // if the tile appears in the last row
      if (rowPosition === board.length - 1) {

        // and is the leftmost tile
          if (index === 0) {
            // check the tile to the right
            if (board[rowPosition][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[rowPosition - 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[rowPosition - 1][index] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // or is the rightmost tile
          if (index === rowPosition.length - 1) {
            // check the tile to the left
            if (board[rowPosition][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[rowPosition - 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
             // check the tile to the top
            if (board[rowPosition - 1][index] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // otherwise 
          if (index !== 0 && index !== rowPosition.length - 1) {
            // check the tile to the right
            if (board[rowPosition][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[rowPosition - 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[rowPosition - 1][index] == 1) {
              numberOfNeighbors += 1;
            } 
            // check the tile to the left
            if (board[rowPosition][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[rowPosition - 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
          }

      // console.log("last", numberOfNeighbors);

      }     

      /////////////////
      // if the tile appears in a middle tow
      if (rowPosition !== board.length - 1 && rowPosition !== 0) {

        // and is the leftmost tile
          if (index === 0) {
            // check the tile to the top
            if (board[rowPosition - 1][index] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[rowPosition - 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the right
            if (board[rowPosition][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[rowPosition + 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[rowPosition + 1][index] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // or is the rightmost tile
          if (index === rowPosition.length - 1) {
             // check the tile to the bottom
            if (board[rowPosition + 1][index] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[rowPosition + 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[rowPosition][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[rowPosition - 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
             // check the tile to the top
            if (board[rowPosition - 1][index] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // otherwise 
          if (index !== 0 && index !== rowPosition.length - 1) {
            // check the tile to the top
            if (board[rowPosition - 1][index] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[rowPosition - 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the right
            if (board[rowPosition][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[rowPosition + 1][index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[rowPosition + 1][index] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[rowPosition + 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[rowPosition][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[rowPosition - 1][index - 1] == 1) {
              numberOfNeighbors += 1;
            }
          }

      // console.log("middle", rowPosition, numberOfNeighbors);

      }    

      // now that we know how many neighbors the tile has, we can determine it's fate

      if (tile == 0 && numberOfNeighbors === 3) {
        return 1;
      }
      if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
        return 0;
      }
      return tile;

    });

    return newRow;

  });
  
  return newBoard;

};


///////////////////
// Utility functions

const zeroOrOne = () => {
 return Math.round(Math.random());
};


//////////////////
//////////////////

module.exports = {
  createNewBoard: createNewBoard,
  passTheTime: passTheTime
}
