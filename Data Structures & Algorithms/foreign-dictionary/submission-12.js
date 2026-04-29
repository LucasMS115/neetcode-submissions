class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */

    foreignDictionary(words) {
        const allChars = new Set(),
              graph = new Map();

        for (const word of words) {
            for (const char of word) {
                allChars.add(char);
            }   
        }

        for (const char of allChars) {
            graph.set(char, new Set());  
        }

        for (let i = 0; i < words.length-1; i++) {
            const w1 = words[i],
                  w2 = words[i+1],
                  minLen = Math.min(w1.length, w2.length);

            let idx = 0;
            while (idx < minLen) {
                if (w1[idx] !== w2[idx]) {
                    graph.get(w1[idx]).add(w2[idx]);
                    break;
                }

                idx++;
            }

            if (idx === minLen && w1.length > w2.length) return "";
        }

        function buildOrder (char) {
            if (path.has(char)) return false;
            if (visited.has(char)) return true;

            path.add(char);
            for (const neighbor of graph.get(char)) {
                if (!buildOrder(neighbor)) return false;
            }
            path.delete(char);

            reverseOrder.push(char);
            visited.add(char);
            return true;
        }

        const reverseOrder = [];
        const visited = new Set(),
              path = new Set();
        for (const char of graph.keys()) {
            if (!buildOrder(char)) return "";
        }

        return reverseOrder.reverse().join("");
    }
}

/*

-> If a letter does not show up with a derivable defined order, it can be anywhere (many solutions)

invalid cases - return empty string:
- w1 is a prefix of w2, but w1 is bigger
- cicles in the graph means invalid

Main reasoning:
- walk a pair of words w1 and w2 compairing each letter
- the first != letter will give us an edge
- keep track of all letters, because letters that do not appear in any edge can be added at the end in any order
- DFS post order


*/

