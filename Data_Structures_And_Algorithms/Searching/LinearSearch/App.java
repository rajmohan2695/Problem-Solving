package Data_Structures_And_Algorithms.LinearSearch;

public class App {
    public static void main(String[] args) {
        int arr[] = {3,5,3,23,4,52,6,411,323,6,7,87,45,34};
        LinearSearch s = new LinearSearch();
        System.out.println(s.Search(arr,323));
    }
}
