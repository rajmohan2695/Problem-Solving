package Data_Structures_And_Algorithms.Queue;

public class App {
    public static void main(String[] args) {
        Queue q = new Queue(5);
        q.push(5);
        q.push(10);
        q.push(15);
        q.push(20);
        q.push(25);
        q.display();
        q.push(30);
        q.display();
    }
}
