package Code_Workouts.JavaWorkouts.InterfaceSample.InterfacesWithSameMethods;

public class Run {
    public static class InterfaceOne implements Interface1{

    }

    public static class InterfaceTwo implements Interface2{

    }

    public static class Interface implements Interface1,Interface2 {

        @Override
        public void print() {
            System.out.println("Overrided Method");
        }
    }

        //Main
        public static void main(String[] args) {
            Run r = new Run();
            InterfaceOne i1 = new InterfaceOne();
            i1.print();
            InterfaceTwo i2 = new InterfaceTwo();
            i2.print();
            Interface i = new Interface();
            i.print();
        }
}

/*
        Output:
        Interface1
        Interface2
        Overrided Method
 */