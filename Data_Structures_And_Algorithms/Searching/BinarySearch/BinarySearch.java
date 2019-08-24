package Data_Structures_And_Algorithms.Searching.BinarySearch;

public class BinarySearch {
    public int binarySearch(int arr[],int start,int end,int element){
    if(end>=start){
        int mid = start+(end-start)/2;
        if(arr[mid]==element){
            return mid;
        }
        if(arr[mid]>element)
            return binarySearch(arr,start,mid-1,element);

            return binarySearch(arr,mid+1,end,element);
        }
        return -1;
    }
}
