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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;
        if (!list1 && !list2) return null;

        let prev,
            head;

        if (list1.val <= list2.val) {
            prev = list1;
            head = list1;
            list1 = list1.next;
        } else {
            prev = list2;
            head = list2;
            list2 = list2.next;
        }

        while (list1 || list2) {
            if (!list2 || (list1 && list2 && list1.val <= list2.val)) {
                prev.next = list1;
                prev = list1;
                list1 = list1.next;
            } else {
                prev.next = list2;
                prev = list2;
                list2 = list2.next;
            }
        }

        return head;
    }
}
