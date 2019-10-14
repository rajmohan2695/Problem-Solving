package Code_Workouts.JavaWorkouts.ThisKeyword.UsingClassContructor;

public class ClassB {
    int age;
    String name;
    static int empid=1;

    ClassB(String name,int age){
        this();
        this.name = name;
        this.age = age;
    }

    ClassB(){
        ++this.empid;
    }

    public void display(){
        System.out.println("Name : "+name);
        System.out.println("Emp no : "+empid);
        System.out.println("Age : "+age);
    }
}
