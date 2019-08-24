package Data_Structures_And_Algorithms.SinglyLinkedList;

public class App {
    public static void main(String[] args) {
        SinglyLinkedList l = new SinglyLinkedList();
        l.insertAtFirst(5);
        l.insertAtFirst(4);
        l.insertAtEnd(10);
        l.displayAll();
        l.deleteAtFirst();
        l.displayAll();
        l.deleteAtEnd();
        l.displayAll();
    }
}