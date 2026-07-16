/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let mergedList = null;
    let smallerNode = null;
    let currentNode = null;

    if (!list1) return list2;
    if (!list2) return list1;


    while (list1 || list2) {

        if (!list1) {
            currentNode.next = list2;
            break
        }
        if (!list2) {
            currentNode.next = list1;
            break;
        }

        if (list1.val < list2.val) {
            smallerNode = list1;
            list1 = list1.next
        } else {
            smallerNode = list2;
            list2 = list2.next;
        }

        if (!mergedList) {
            mergedList = smallerNode;
            currentNode = mergedList;
        } else {
            currentNode.next = smallerNode;
            currentNode = currentNode.next;
        }
        // console.log(mergedList,currentNode,currentNode.val,list1,list2)


    } return mergedList;

};