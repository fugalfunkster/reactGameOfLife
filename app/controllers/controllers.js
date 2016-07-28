import _map from 'lodash.map';

const createNewBoard = (width, height) => {
  const board = [];
  // for each unit of height
  for (let i = 0; i < (width * height); i++){
    board[i] = zeroOrOne();
  }
  console.log(board.length);
  return board;
};

const passTheTime = (board, width, height) => { 

  let newBoard = _map(board, (tile, index) => {

      //we must count the tiles neighbors
      let numberOfNeighbors = 0;

      /////////////////
      // if the tile appears in the first row
      if (index < width) {

          // and is the leftmost tile
          if (index === 0) {
            // check the tile to the right
            if (board[index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[index + 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[index + width] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // or is the rightmost tile
          if (index === width - 1) {
            // check the tile to the left
            if (board[index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[index - 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[index + width] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // otherwise 
          if (index !== 0 && index !== width - 1) {
            // check the tile to the right
            if (board[index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[index + 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[index + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[index - 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
          }

      // console.log("first", numberOfNeighbors);

      }     

      /////////////////
      // if the tile appears in the last row
      if (index <= (width * (height - 1))) {

        // and is the leftmost tile
          if (index === width * (height - 1)) {
            // check the tile to the right
            if (board[index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[index + 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[index - width] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // or is the rightmost tile
          if (index === board.length - 1) {
            // check the tile to the left
            if (board[index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[index - 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
             // check the tile to the top
            if (board[index - width] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // otherwise 
          if (index !== width * (height - 1) && index !== board.length - 1) {
            // check the tile to the right
            if (board[index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[index + 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[index - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[index - 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
          }

      // console.log("last", numberOfNeighbors);

      }     

      /////////////////
      // if the tile appears in a middle tow
      if (index > width - 1 && index < width * (height - 1)) {

        // and is the leftmost tile
          if (index % width === 0) {
            // check the tile to the top
            if (board[index - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[index + 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the right
            if (board[index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[index + 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[index + width] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // or is the rightmost tile
          if (index % (width - 1) === 0) {
            // check the tile to the bottom
            if (board[index + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[index - 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[index - 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[index - width] == 1) {
              numberOfNeighbors += 1;
            }
          }

        // otherwise 
          if (index % width !== 0 && index % (width - 1) !== 0) {
            // check the tile to the top
            if (board[index - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[index + 1 - width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the right
            if (board[index + 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[index + 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[index + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[index - 1 + width] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[index - 1] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[index - 1 - width] == 1) {
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
};
