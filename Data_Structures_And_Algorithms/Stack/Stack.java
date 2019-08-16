package Data_Structures_And_Algorithms.Stack;

public class Stack {
    int k = 5;
    int current = -1;
    int[] stack = new int[k];
    public Stack (){

    }
    public void push(int a){
        current++;
        stack[current] = a;
    }
    public void pop(){
        --current;
    }
    public void display(){
        for(int l=current;l>=0;l--){
            System.out.println(stack[l]);
        }
    }
}
