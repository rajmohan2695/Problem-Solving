package Data_Structures_And_Algorithms.SinglyLinkedList;

public class SinglyLinkedList {
    Node first = null;
    public boolean isEmpty(){
        return (first == null);
    }
    public SinglyLinkedList(){

    }

    public void insertAtFirst(int data){
        Node newNode = new Node();
        newNode.data = data;
        newNode.next = first;
        first = newNode;
    }

    public int deleteAtFirst(){
        int temp = first.data;
        first = first.next;
        return temp;
    }

    public void insertAtEnd(int data){
        Node newNode = new Node();
        newNode.data = data;
        if(isEmpty()){
            first = newNode;
        }
        Node current = first;
        while(current.next!=null){
            current = current.next;
        }
        current.next = newNode;
    }

    public void displayAll(){
        Node current = first;
        while(current!=null){
            current.displaNode();
            current = current.next;
        }
        System.out.println();
    }

    public int deleteAtEnd(){
        int temp;
        if(first == null){
            return 0;
        }
        else{
            Node current = first;
            while(current.next.next!=null){
                current = current.next;
            }
            temp = current.data;
            current.next = null;
        }
        return 0;
    }
}
