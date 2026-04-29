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
        let prev = dummy, 
            fast = dummy.next, 
            slow = dummy.next;
        
        while(n > 0) {
            fast = fast.next;
            n--;
        }
        console.log(fast);

        while (fast) {
            prev = slow;
            slow = slow.next;
            fast = fast.next;
        }

        if (slow) {
            prev.next = slow.next;
            slow.next = null;
        }

        return dummy.next;
    }
}
