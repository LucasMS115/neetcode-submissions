class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    canFinish(numCourses, prerequisites) {
        const courseToPrs = {},
              path = new Set();

        for (const [course, pr] of prerequisites) {
            if (!courseToPrs[course]) courseToPrs[course] = new Set([pr]);
            else courseToPrs[course].add(pr);
        }

        function canComplete (course) {
            if (path.has(course)) return false;
            if (!courseToPrs[course] || !courseToPrs[course].size) return true;

            path.add(course);

            for (const pr of courseToPrs[course]) {
                if (canComplete(pr, path)) courseToPrs[course].delete(pr);
            }

            path.delete(course);

            if (courseToPrs[course].size) return false;
            return true;
        }

        for (const course of Object.keys(courseToPrs)) {
            if (!canComplete(course)) return false;
        }

        return true;
    }
}
