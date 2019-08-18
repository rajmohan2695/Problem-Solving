package Data_Structures_And_Algorithms.Queue;

public class Queue {
    private int start = 0;
    private int current = -1;
    private int[] queue;
    private int size;

    public Queue(int size) {
        queue = new int[size];
        this.size = size;
    }

    public void push(int data) {
        current++;
        queue[current=current % size] = data;
    }

    public void pop() {
        if (isEmpty()) {
            System.out.println("Queue is Empty");
        } else {
            start++;
        }
    }

    public void displayall() {
        for (int i = 0; i < size; i++) {
            System.out.println(queue[i]);
        }
    }

    public void display(){
        for(int i=0,j=start;j%size!=current;i++,j++){
            System.out.println(queue[(i+j)%size]);
        }
        System.out.println();
    }

    public boolean isEmpty() {
        return current == -1;
    }
}
