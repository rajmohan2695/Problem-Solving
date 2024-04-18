package Code_Workouts.JavaWorkouts;

public class Foreachfor2darray {
    public static void main(String[] args) {
        int[][] points = new int[10][10];
        for(int[] row:points){
            for(int column : row){
                System.out.print(column);
            }
            System.out.println();
        }
    }
}

/*
Output:
00000
00000
00000
00000
00000
 */
