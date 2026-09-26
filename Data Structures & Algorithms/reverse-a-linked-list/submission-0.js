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
    reverseList(head) {
        if (head === null) return null;

        let temp = head.next;
        head.next = null;

        while (temp) {
            let nextTemp = temp.next;
            temp.next = head;
            head = temp;
            temp = nextTemp;
        }

        return head;
    }
}
