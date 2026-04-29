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
     * @param {ListNode} head
     * @return {ListNode}
     */
    // 
    reverseList(head) {
        let prev = null;

        while (head) {
            let next = head.next; // null
            head.next = prev; // 2
            prev = head; // 3
            head = next; // null
        }

        return prev;
    }
}

