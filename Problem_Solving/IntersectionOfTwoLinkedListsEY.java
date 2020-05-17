
// Leetcode 160. Intersection of Two Linked Lists EY

/*

    Write a program to find the node at which the intersection of two singly linked lists begins.

    Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
    Output: Reference of the node with value = 8
    Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
    From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5].
    There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

    Notes:

    If the two linked lists have no intersection at all, return null.
    The linked lists must retain their original structure after the function returns.
    You may assume there are no cycles anywhere in the entire linked structure.
    Your code should preferably run in O(n) time and use only O(1) memory.
* */

package Problem_Solving;

import Data_Structures_And_Algorithms.LinkedList.SinglyLinkedList.Node;

import java.util.HashSet;


class IntersectionOfTwoLinkedListsEY {
    public Node getIntersectionNode(Node headA, Node headB) {

        HashSet<Node> firstList = new HashSet<>();

        while(headA != null){
            firstList.add(headA);
            headA = headA.next;
        }

        while(headB != null){
            if(firstList.contains(headB))
                return headB;
            headB = headB.next;
        }

        return null;

    }
}