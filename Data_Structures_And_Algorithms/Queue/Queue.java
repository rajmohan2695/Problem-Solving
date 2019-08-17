package Data_Structures_And_Algorithms.Queue;

public class Queue {
    private int current = -1;
    private int qsize = -1;
    private int[] queue;
    private int size;

    public Queue(int size) {
        queue = new int[size];
        this.size = size;
    }

    public void push(int data) {
        current++;
        queue[current % size] = data;
        qsize = (qsize + 1) % size;
    }

    public void pop() {
        if (isEmpty()) {
            System.out.println("Queue is Empty");
        } else {
            current++;
            qsize--;
        }
    }

    public void displayall() {
        for (int i = 0; i < size; i++) {
            System.out.println(queue[i]);
        }
    }

    public void display(){
        for(int i=0,j=current;i<qsize;i++,j++){
            System.out.println(queue[j%size]);
        }
        System.out.println();
    }

    public boolean isEmpty() {
        return qsize == -1;
    }
}
