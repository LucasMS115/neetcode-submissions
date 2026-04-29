class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */

    foreignDictionary(words) {
    const graph = {};
    const allChars = new Set();

    // 1. inicializa todos os nós
    for (const word of words) {
        for (const char of word) {
            allChars.add(char);
            if (!graph[char]) graph[char] = new Set();
        }
    }

    // 2. build graph
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);

        let foundDiff = false;

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                graph[w1[j]].add(w2[j]);
                foundDiff = true;
                break;
            }
        }

        // invalid case
        if (!foundDiff && w1.length > w2.length) return "";
    }

    const visiting = new Set();
    const visited = new Set();
    const result = [];

    function dfs(node) {
        if (visiting.has(node)) return false; // ciclo
        if (visited.has(node)) return true;

        visiting.add(node);

        for (const nei of graph[node]) {
            if (!dfs(nei)) return false;
        }

        visiting.delete(node);
        visited.add(node);
        result.push(node); // pós-ordem

        return true;
    }

    // 3. roda DFS em todos os nós
    for (const char of allChars) {
        if (!dfs(char)) return "";
    }

    // 4. reverse
    return result.reverse().join("");
}
}

/*
list of strings with words SORTED 

what is the order? If the order is invalid, return an empty string
If there are multiple valid order of letters, return any of them.

careful with prefixes

Input: ["hrn","hrnn","er","enn","rfnn"]

set letters = (h,e,r,n,f)
{
"n": [f]
"h": [e]
"r": [n]
"e": [r] 
}

cicle means invalid

*/

