class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    canFinish(numCourses, prerequisites) {
        const courseToPrs = {}

        for (const [course, pr] of prerequisites) {
            if (!courseToPrs[course]) courseToPrs[course] = new Set([pr]);
            else courseToPrs[course].add(pr);
        }

        function dfs (course, visited) {
            if (visited.has(course)) return false;
            if (!courseToPrs[course] || !courseToPrs[course].size) return true;

            visited.add(course);

            for (const pr of courseToPrs[course]) {
                if (dfs(pr, visited)) courseToPrs[course].delete(pr);
            }

            visited.delete(course);

            return !courseToPrs[course].size;
        }

        for (const course of Object.keys(courseToPrs)) {
            if (!dfs(course, new Set())) return false;
        }

        return true;
    }
}
