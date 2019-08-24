package Data_Structures_And_Algorithms.Sorting.SelectionSort;

public class App {
    public static void main(String[] args) {
        SelectionSort s = new SelectionSort();
        int a[] = {9,8,3,13,87,12,99};
        s.selectionSort(a);
        for(int i :a){
            System.out.print(i+" ");
        }
    }
}
