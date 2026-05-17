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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = intervals.map(interval => interval.start),
              ends   = intervals.map(interval => interval.end); 

        starts.sort( (a,b) => a-b);
        ends.sort( (a,b) => a-b);

        let max      = 0,
            count    = 0,
            startIdx = 0, 
            endIdx   = 0;

        while(startIdx < intervals.length || endIdx < intervals.length) {
            const nextStart = starts[startIdx],
                  nextEnd   = ends[endIdx];

            const starting = nextStart !== undefined && nextEnd !== undefined &&
                             nextStart < nextEnd;

            if (starting) {
                startIdx++;
                count++;

                max = Math.max(max, count);
            } else {
                endIdx++;
                count--;
            }
        }

        return max;
    }
}

