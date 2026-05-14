class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];

        candidates.sort((a,b) => a-b);

        function findCombinations (start, path, sum) {
            if (sum >= target) {
                if (sum === target) res.push([...path]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                const num = candidates[i];
                path.push(num);

                findCombinations(i+1, path, sum + num);
                path.pop();

                while (i < candidates.length-1 && candidates[i+1] === num) {
                    i++;
                }
            }
        }

        findCombinations(0, [], 0);

        return res;
    }

    // n
    // n-1
    // n-2
    // ...
    // n-n
}
