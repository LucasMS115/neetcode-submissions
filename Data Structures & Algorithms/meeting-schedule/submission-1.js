/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */

    // O(nlog(n))
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => {return a.end - b.end});
        let prevEnd;

        for (let {start, end} of intervals) {
            if (prevEnd && prevEnd > start) return false;
            prevEnd = end;
        }

        return true;
    }
}


/*
[(0,30),(5,10),(15,20)]

0 --------------------------- 30
  5 -- 10     15 ----- 20

menor inicio = 0
menor final = 30



*/