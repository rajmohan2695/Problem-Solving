package Data_Structures_And_Algorithms.Searching.BinarySearch;

public class App {
    public static void main(String[] args) {
        BinarySearch b = new BinarySearch();
        int arr[] = {1,2,3,4,5,11,23,24,56,466,7888};
        System.out.println(b.binarySearch(arr,0,10,5));
    }
}
