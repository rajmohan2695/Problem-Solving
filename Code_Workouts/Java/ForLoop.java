package Code_Workouts.JavaWorkouts;

public class ForLoop {
    public static void main(String[] args) {
        int a = 0;
        int b[] = {6, 7, 8, 9, 10};

        //Simple for loop
        for (int i = 0; i < b.length; i++) {
            System.out.println(b[i]);
        }

        System.out.println();

        //ForEach or Enhanced For loop
        for (int i : b) {
            System.out.println(i);
        }

        System.out.println();

        //NestedForLoop
        for (int i = 0; i < b.length; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(b[j]);
            }
            System.out.println();
        }

        System.out.println();

        //Labelled For Loop
        label1:
        for (int i = 0; i < b.length; i++) {
            label2:
            for (int j = 0; j < b.length; j++) {
                System.out.print(j);
                if (j >= 2)
                    break label2;
            }
            System.out.println();
        }

        System.out.println();

        //Infinite For Loop
        int s = 0;
        for (; ; ) {
            System.out.print(s);
            s++;
            if (s >= 5)
                break;
        }
    }
}

/*
Output:
            6
            7
            8
            9
            10

            6
            7
            8
            9
            10

            6
            67
            678
            6789
            678910

            012
            012
            012
            012
            012

            01234
 */