package Data_Structures_And_Algorithms.Stack;

public class Stack {
    int k = 5;
    int i = -1;
    int[] stack = new int[k];
    public Stack (){

    }
    public void push(int a){
        i++;
        stack[i] = a;
    }
    public void pop(){
        --i;
    }
    public void display(){
        for(int l=i;l>=0;l--){
            System.out.println(stack[l]);
        }
    }
}
