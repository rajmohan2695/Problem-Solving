package Data_Structures_And_Algorithms.Searching.LinearSearch;

public class LinearSearch {
    public LinearSearch() {

    }

    public int Search(int[] elements, int elementToFind) {
        int e = -1;
        for (int i = 0; i < elements.length; i++) {
            if (elements[i] == elementToFind) {
                return i;
            }
        }
        return e;
    }
}
