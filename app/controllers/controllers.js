import _map from 'lodash.map';

const createNewBoard = (width, height) => {
  const board = [];
  // for each unit of height
  for (let i = 0; i < (width * height); i++){
    board[i] = zeroOrOne();
  }
  console.log(board);
  return board;
};

const passTheTime = (board, width, height) => { 

  let newBoard = _map(board, (tile, index) => {

      //we must count the tiles neighbors
      let numberOfNeighbors = 0;
      const t = index - width;
      const tr = index - width + 1;
      const r = index + 1;
      const br = index + width + 1;
      const b = index + width;
      const bl = index + width - 1;
      const l = index - 1;
      const tl = index - width - 1;


      /////////////////
      // if the tile appears in a middle tow
      if (index > width - 1 && index < width * (height - 1)) {

        // and is the leftmost tile
          if (index % width === 0) {
            // check the tile to the top
            if (board[t] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[tr] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the right
            if (board[r] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[br] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[b] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

        // or is the rightmost tile
          if ((index + 1) % width === 0) {
            // check the tile to the bottom
            if (board[b] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[bl] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[l] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[tl] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[t] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

        // otherwise 
          if (index % width !== 0 && index % (width - 1) !== 0) {
            // check the tile to the top
            if (board[t] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[tr] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the right
            if (board[r] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[br] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[b] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[bl] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[l] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[tl] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

      // console.log("middle", rowPosition, numberOfNeighbors);

      }    
    
      /////////////////
      // if the tile appears in the first row
      if (index < width) {

          // and is the leftmost tile
          if (index === 0) {
            // check the tile to the right
            if (board[r] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[br] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[b] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

        // or is the rightmost tile
          if (index === width - 1) {
            // check the tile to the left
            if (board[l] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[bl] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[b] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

        // otherwise 
          if (index !== 0 && index !== width - 1) {
            // check the tile to the right
            if (board[r] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-right
            if (board[br] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom
            if (board[b] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[l] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the bottom-left
            if (board[bl] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

      // console.log("first", numberOfNeighbors);

      }     

      /////////////////
      // if the tile appears in the last row
      if (index >= (width * (height - 1))) {

        // and is the leftmost tile
          if (index === width * (height - 1)) {
            // check the tile to the right
            if (board[r] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[tr] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[t] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

        // or is the rightmost tile
          if (index === board.length - 1) {
            // check the tile to the left
            if (board[l] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[tl] == 1) {
              numberOfNeighbors += 1;
            }
             // check the tile to the top
            if (board[t] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

        // otherwise 
          if (index !== width * (height - 1) && index !== board.length - 1) {
            // check the tile to the right
            if (board[r] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-right
            if (board[tr] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top
            if (board[t] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the left
            if (board[l] == 1) {
              numberOfNeighbors += 1;
            }
            // check the tile to the top-left
            if (board[tl] == 1) {
              numberOfNeighbors += 1;
            }
            if (tile == 0 && numberOfNeighbors === 3) {
              return 1;
            }
            if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
              return 0;
            }
            return tile;
          }

      // console.log("last", numberOfNeighbors);

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
