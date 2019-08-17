package Data_Structures_And_Algorithms.Stack;

public class App {
    public static void main(String[] args) {
        Stack s = new Stack(5);
        System.out.println(s.peek());
        s.push(5);
        s.push(10);
        s.push(34);
        s.push(34);
        s.pop();
        s.push(35);
        s.push(100);
        s.display();
        System.out.println(s.isFull());
        System.out.println(s.isEmpty());
        System.out.println(s.peek());
    }
}