/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// [1,2,3,4]
// [1]

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // remove the first node? => update head
        // remove the last node? => nothing new
        // remove the only node? => update head; there will not a head.next (careful)
        // remove a middle node => update the prev.next to current.next, nullify current.next

        let target = this.getSize(head) - n;
        let prev, curr = head;

        if (target === 0) {
            const next = head.next;
            head.next = null;
            return next;
        }

        console.log(target)
        while (target > 0 && curr) {
            prev = curr;
            curr = curr.next;
            target--;
        }

        console.log(curr)
        // console.log(prev)

        if (curr) {
            prev.next = curr.next;
            curr.next = null;
        }

        return head;
    }

    getSize(head) {
        let size = 0,
            curr = head;

        while (curr) {
            size++;
            curr = curr.next;
        }

        return size;
    }
}
