class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length, COLS = grid[0].length;

        const rottenQueue = [];
        const steps =[[-1,0], [1,0], [0, -1], [0,1]] 

        let rottenIdx = 0;
        let nextLevel = 0;
        let minutes = 0;

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 2) rottenQueue.push([row, col]);
            }
        }

        nextLevel = rottenQueue.length;
        while (rottenQueue.length && rottenIdx !== rottenQueue.length) {
            const [row, col] = rottenQueue[rottenIdx];
            rottenIdx++;

            for (let [srow, scol] of steps) {
                const nextRow = row + srow,
                      nextCol = col + scol;

                if (nextRow >= 0 && nextRow < ROWS &&
                    nextCol >= 0 && nextCol < COLS &&
                    grid[nextRow][nextCol] === 1){

                    grid[nextRow][nextCol] = 2;
                    rottenQueue.push([nextRow, nextCol]);
                }
            }

            if (rottenIdx < rottenQueue.length && nextLevel === rottenIdx) {
                minutes++;
                nextLevel = rottenQueue.length;
            }
        }

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 1) return -1;
            }
        }

        return minutes;
    }
}

/*
can we receive invalid inputs? (eg. grid is null, vals != 1,2,3, diferent types)
ignoring validations for the sake of the exercise

adj: max 1 line and 1 col diff, no diagonals, up down left right

start on minute 0 (initial state), no limits

the only change of states is from 1 to 2

no ordering in the grid

*/

function orangesRotting(grid) {
    const ROWS = grid.length, COLS = grid[0].length;

    let rottenQueue = [];
    let rottenIdx = 0;
    let rotting = [];
    let minutes = 0;

    
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 2) rottenQueue.push([row, col]);
        }
    }

    while (rottenQueue.length && rottenIdx !== rottenQueue.length) {
        const [row, col] = rottenQueue[rottenIdx];
        rottenIdx++;

        if (row > 0      && grid[row-1][col] === 1) rotting.push([row-1, col]);
        if (row < ROWS-1 && grid[row+1][col] === 1) rotting.push([row+1, col]);
        if (col > 0      && grid[row][col-1] === 1) rotting.push([row, col-1]);
        if (col < COLS-1 && grid[row][col+1] === 1) rotting.push([row, col+1]);

        if (rottenIdx === rottenQueue.length && rotting.length > 0) {
            minutes++;

            for (let [r, c] of rotting) {
                grid[r][c] = 2;
                rottenQueue.push([r,c]);
            }

            rotting = [];
        }
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 1) return -1;
        }
    }

    return minutes;
}

const test0 = 
[
    []
] // 0

const test1 = 
[
    [1]
] // -1

const test2 = 
[
    [2]
] // 0


const test3 = 
[
    [0, 1, 2]
] // 1

const test4 = 
[
    [0],
    [2],
    [1]
] // 1

const test5 = 
[
    [0, 1, 0],
    [1, 2, 1],
    [0, 1, 0]
] // 1


const test6 = 
[
    [2, 1, 0],
    [1, 2, 1],
    [0, 1, 0]
] // 1

const test7 = 
[
    [2, 1, 0],
    [1, 0, 1],
    [1, 1, 2]
] // 2

const test8 = 
[
    [2, 1, 0],
    [1, 0, 0],
    [0, 0, 1]
] // -1

// console.log(orangesRotting(test0) === 0);
// console.log(orangesRotting(test1) === -1);
// console.log(orangesRotting(test2) === 0);
// console.log(orangesRotting(test3) === 1);
// console.log(orangesRotting(test4) === 1);
// console.log(orangesRotting(test5) === 1);
// console.log(orangesRotting(test6) === 1);
// console.log(orangesRotting(test7) === 2);
// console.log(orangesRotting(test8) === -1);

// O(n*m) tempo
// minutes = 2
// rottenQueue = [[0,1], [1,0], [2, 1], [1, 2]] // O(n*m) space
// roting = [] // O(n*m) space
