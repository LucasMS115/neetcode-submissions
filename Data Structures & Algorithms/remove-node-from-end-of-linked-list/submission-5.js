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
        const dummy = new ListNode(0, head);
        let target = this.getSize(head) - n;
        let prev = dummy, 
            curr = dummy.next;

        while (target > 0 && curr) {
            prev = curr;
            curr = curr.next;
            target--;
        }

        if (curr) {
            prev.next = curr.next;
            curr.next = null;
        }

        return dummy.next;
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
