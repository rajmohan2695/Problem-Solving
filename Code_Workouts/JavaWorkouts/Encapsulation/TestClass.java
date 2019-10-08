package Code_Workouts.JavaWorkouts.Encapsulation;

public class TestClass {
    public static void main(String[] args) {
        Encapsulate en = new Encapsulate();
        en.setAge(24);
        en.setEmpno(123);
        en.setName("Raj Mohan");
        en.setAge(23);
        System.out.println(en.getName());
        System.out.println(en.getEmpno());
        System.out.println(en.getAge());
    }
}
