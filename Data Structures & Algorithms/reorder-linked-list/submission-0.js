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
            startHead = head.next,
            halfHead = head;

        const size = this.getSize(head);
        for (let i = 0; i < Math.ceil(size/2)-1; i++) {
            halfHead = halfHead.next;            
        }
        
        let revHead = this.reverse(halfHead.next);
        halfHead.next = null;
        
        console.log(revHead);
        console.log(head)

        let selectLeft = false;
        while (startHead || revHead) {
            if (startHead && selectLeft) {
                prev.next = startHead;
                prev = startHead;
                startHead = startHead.next;
                selectLeft = false;
            } else {
                prev.next = revHead;
                prev = revHead;
                revHead = revHead?.next;
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

// count size => 7 | half = 4

[0, 1, 2, 3, 4, 5, 6]

[0,1,2,6,5,4,3]

