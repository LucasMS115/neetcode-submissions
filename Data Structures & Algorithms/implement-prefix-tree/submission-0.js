class TreeNode {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (const char of word) {
            if (curr.children[char] === undefined) {
                curr.children[char] = new TreeNode();
            }

            curr = curr.children[char];
        }

        curr.wordEnd = true;
        // console.log(JSON.stringify(this.root));
    }

    // root { b: {o: {l: {}, wordEnd}}}

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children[char]) return false;
            else curr = curr.children[char];
        }

        return curr.wordEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (const char of prefix) {
            if (!curr.children[char]) return false;
            else curr = curr.children[char];
        }

        return true;
    }
}
