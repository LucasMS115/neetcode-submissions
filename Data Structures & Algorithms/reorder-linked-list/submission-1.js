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
     * @return {void}
     */
    

    reorderList(head) {
        if (!head || !head.next) return head;

        let prev = head,
            left = head.next,
            leftEnd = head;

        const size = this.getSize(head);
        for (let i = 0; i < Math.ceil(size/2)-1; i++) {
            leftEnd = leftEnd.next;            
        }
        
        let right = this.reverse(leftEnd.next);
        leftEnd.next = null;

        let selectLeft = false;
        while (left || right) {
            if (left && selectLeft) {
                prev.next = left;
                prev = left;
                left = left.next;
                selectLeft = false;
            } else {
                prev.next = right;
                prev = right;
                right = right?.next;
                selectLeft = true;
            }
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

    reverse(head) {
        let prev = null;

        while (head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

        return prev;
    }
}

