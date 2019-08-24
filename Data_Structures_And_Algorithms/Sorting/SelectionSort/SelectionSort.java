package Data_Structures_And_Algorithms.Sorting.SelectionSort;

public class SelectionSort {
    public void selectionSort(int[] arr){
        for(int i=0;i<arr.length;i++){
            int minimum = i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    minimum=j;
                }
            }
            int temp = arr[minimum];
            arr[minimum] = arr[i];
            arr[i] = temp;
        }
    }
}
