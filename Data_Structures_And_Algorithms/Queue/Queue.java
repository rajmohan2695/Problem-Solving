package Data_Structures_And_Algorithms.Queue;

public class Queue {
    private int current = -1;
    private int end = -1;
    private int[] queue;
    private int size;
    public Queue(int size){
        queue = new int[size];
        this.size = size;
    }

    public void push(int data){
        current++;
        queue[current%size] = data;
        end = (end+1)%size;
    }

    public void pop(){
        current++;
        size--;
    }

    public void display(){
        for(int i=0;i<size;i++){
            System.out.println(queue[i]);
        }
        System.out.println();
    }
}
