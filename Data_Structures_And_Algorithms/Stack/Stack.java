package Data_Structures_And_Algorithms.Stack;

public class Stack {
    private int current = -1;
    private int size;
    private int[] stack;

    public Stack(int size) {
        this.size = size;
        stack = new int[size];
    }

    public void push(int a) {
        if (!isFull()) {
            current++;
            stack[current] = a;
        } else {
            System.out.println("Limit Exceeded");
        }
    }

    public String peek() {
        if (isEmpty()) {
            return null;
        } else {
            return String.valueOf(stack[current]);
        }
    }

    public void pop() {
        if (!isEmpty()) {
            --current;
        } else {
            System.out.println("No elements to delete");
        }
    }

    public void display() {
        for (int l = current; l >= 0; l--) {
            System.out.println(stack[l]);
        }
    }

    public boolean isEmpty() {
        return (current == -1);
    }

    public boolean isFull() {
        return (current == size - 1);
    }
}
