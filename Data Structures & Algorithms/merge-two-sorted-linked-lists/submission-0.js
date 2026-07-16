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
        if(!list1) return list2;
        if(!list2) return list1;
        let mergedList = null;
        let currentNode = null;
        let smallerNode = null;

        while(list1 || list2){
            if(!list1) {
                currentNode.next = list2;
                break;
            }
            if(!list2) {
                currentNode.next = list1;
                break;
            }

            if(list1.val < list2.val){
                smallerNode = list1;
                list1 = list1.next; 
            } else {
                smallerNode = list2;
                list2 = list2.next;
            }
            if(!currentNode){
                mergedList = smallerNode;
                currentNode = mergedList;
            } else {
                currentNode.next = smallerNode;
                currentNode = currentNode.next;
            }

        } console.log(currentNode,mergedList)
        return mergedList
    }
}
