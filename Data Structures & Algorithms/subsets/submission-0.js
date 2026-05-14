class Solution {
    /*
    []
    [1]
    [1, 2]
        [1,2,3]
            [1,2,3,4]
        [1,2,4]
            [1,2,4,3] (x)
    [1, 3]
        [1,3,2] (x)
        [1,3,4] (x)
    [1, 4]
        [1,4,2] (x)
        [1,4,3] (x)
    [2]
        [2,1] (x)
        [2,3] +
        [2,4] +
    [3]
        [3,1] (x)
        [3,2] (x)
        [3,4] +

     */

    // O(n) tempo & O(1) espaço;
    genKey (arr) {
        const bucketCount = new Array(21).fill(0); //not extensible

        for (let num of arr) {
            let idx = num + 10; //not extensible
            bucketCount[idx] += 1;
        }

        return bucketCount.toString();
    }

    subsets(nums) {
        const visited = new Set(); //O(n) espaço
        const res = [];
        const possibilities = new Set(nums); //O(n) tempo e espaço
        
        //O(2^n) tempo e espaço
        const calculateCombinations = (curr, possibilities) => {
            const key = this.genKey(curr); // O(n) tempo & O(1) espaço;
            const next = new Set(possibilities); // O(n) tempo & O(n) espaço;

            if (visited.has(key) || !possibilities) { // O(1) tempo & O(1) espaço;
                return;
            }

            visited.add(key); // O(1) tempo & O(1) espaço;
            res.push(Array.from(curr)); // O(n) tempo & O(n) espaço;
 
            for (let num of possibilities) { // O(n) tempo
                curr.push(num); // O(1) tempo
                next.delete(num); // O(1) tempo

                calculateCombinations(curr, next);

                next.add(num); // O(1) tempo 
                curr.pop(); // O(1) tempo 
            }
        }

        calculateCombinations([], possibilities); // //O(2^n) tempo e espaço
        return res;
    }
}
