var mergeTwoLists = function (list1, list2) {
    let mergedList = null
    let currentNode = null
    let smallerNode = null
    if (!list1) return list2
    if (!list2) return list1
    
    while (list1 || list2) {
        if (!list1) { currentNode.next = list2; break }
        if (!list2) { currentNode.next = list1; break }
        if (list1.val <= list2.val) {
            smallerNode = list1
            list1 = list1.next
        } else {
            smallerNode = list2
            list2 = list2.next
        }
        if (!mergedList) {
            mergedList = smallerNode
            currentNode = mergedList
        } else {
            currentNode.next = smallerNode
            currentNode = currentNode.next
        }
    }
    return mergedList
};