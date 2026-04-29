class TrieNode {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }

            curr = curr.children[char];
        }

        curr.wordEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, start = 0, curr = this.root) {

        for (let i = start; i < word.length; i++) {
            const char = word[i];

            if (char !== '.' && !curr.children[char]) return false;

            if (char === '.') {
                for (const child of Object.values(curr.children)) {
                    if (this.search(word, i+1, child)) return true;
                }

                return false;
            } else {
                curr = curr.children[char];
            }
        }

        return curr.wordEnd;
    }
}
