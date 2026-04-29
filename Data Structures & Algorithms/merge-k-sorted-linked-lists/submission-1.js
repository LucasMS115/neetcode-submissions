/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || !lists.length) return null;

        // let curr, head;

        // for (let node of lists) {
        //     if (!curr || curr.val > node.val) curr = node;
        // }
        // head = curr;

        const dummy = new ListNode();
        let curr = dummy;

        while (curr) {
            let nextIdx = 0;
            // console.log(curr)

            for (let i = 0; i < lists.length; i++) {
                const node = lists[i];

                if (!lists[nextIdx] || lists[nextIdx].val >= node?.val) nextIdx = i;
                // console.log(nextIdx)
            }

            curr.next = lists[nextIdx];
            curr = lists[nextIdx];
            lists[nextIdx] = lists[nextIdx]?.next;
            // console.log(curr)
        }

        return dummy.next;
    }
}
