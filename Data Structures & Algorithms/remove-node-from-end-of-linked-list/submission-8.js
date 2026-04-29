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
        if (!head || n <= 0) return;

        const dummy = new ListNode(0, head);
        let fast = dummy.next, 
            slow = dummy;
        
        while(n > 0) {
            fast = fast.next;
            n--;
        }

        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        const next = slow.next.next;
        slow.next.next = null;
        slow.next = next;

        return dummy.next;
    }
}
