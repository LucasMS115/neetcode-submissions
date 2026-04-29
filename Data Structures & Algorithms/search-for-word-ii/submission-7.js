class TrieNode {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }

            curr = curr.children[char];
        }

        curr.wordEnd = true;
    }

    build (words) {
        for (const word of words) {
            this.add(word);
        }
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    /*
    Input: matrix n x m, array of strings (words)
    Output: words found

    Input:
       lower case letters on matrix
       all casing letters in words
       words are unique

    Ouput:
        same casing
        same order of input words


    Cases:
    - empty board
    - empty words
    - no words found
    - all words found
    - some words found

    - one word is a prefix of some other
    - steps with 4 possibilities / 3 possibilities / 2 possibilites


    approach:
    1 - for each letter in board; for each word that start with it; dfs to check if word is found; add to res when found
    2 - create a trie from words; for each letter in board; explore the paths formed by it; when a word end is found, add the path to res;

    1 - O(n*m*l * 4^w) time and O(w) space
    2 - l*w + n*m * 4^w time and O(w * l) space
    n = rows, m = cols, 4 from the 4 directions, w = word medium length, l = number of words

    */
    findWords(board, words) {
        const ROWS = board.length,
              COLS = board[0].length;

        const trie = new Trie();
        trie.build(words);

        const res = [];

        function dfs (trieNode, r, c, path) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;

            const char = board[r][c];
            
            if (!trieNode.children[char]) return;

            const nextNode = trieNode.children[char];

            path.push(char);
            if (nextNode.wordEnd) {
                res.push(path.join(""));
                nextNode.wordEnd = false;
            }

            board[r][c] = "#";
            const steps = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]];
            for (const [nextRow, nextCol] of steps) {
                dfs(nextNode, nextRow, nextCol, path);
            }

            path.pop(char);
            board[r][c] = char;

            // pruning: remove leaf node
            if (Object.keys(nextNode.children).length === 0) {
                delete trieNode.children[char];
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(trie.root, r, c, []);
            }
        }

        return res;
    }
}
