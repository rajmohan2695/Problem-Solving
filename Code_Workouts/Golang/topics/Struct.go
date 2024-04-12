package topics

import "fmt"

type User struct {
	FirstName string
	LastName  string
	Age       int64
}

func printUserDetail() {
	user := User{
		FirstName: "Raj Mohan",
		LastName:  "Jayakumar",
		Age:       28,
	}

	fmt.Println(user)

	fmt.Printf("My User is %s %s, And he/she is %d years old\n", user.FirstName, user.LastName, user.Age)
}

// Nested structs

type Employee struct {
	Role              string
	ExperienceInYears int64
	User              User
}

func printEmployeeDetail() {
	fmt.Println("\n - Nested Structs -")
	employee := Employee{
		Role:              "Staff Software Engineer",
		ExperienceInYears: 8,
		User: User{
			FirstName: "Raj Mohan",
			LastName:  "Jayakumar",
			Age:       28,
		},
	}
	fmt.Println(employee)

	fmt.Printf("The Employee %s has %d years of experience. Currently he is working as %s\n", employee.User.FirstName, employee.ExperienceInYears, employee.Role)
}

// Receiver function

func (emp *Employee) getEmployeeRoleAndExperienceAsString() string {
	return fmt.Sprintf("The Employee %s has %d years of experience. Currently he is working as %s\n", emp.User.FirstName, emp.ExperienceInYears, emp.Role)
}

func printEmployeeDetailUsingReceiverFuntion() {
	fmt.Println("\n - Receiver function -")
	employee := Employee{
		Role:              "Staff Software Engineer",
		ExperienceInYears: 8,
		User: User{
			FirstName: "Raj Mohan",
			LastName:  "Jayakumar",
			Age:       28,
		},
	}
	fmt.Println(employee)
	fmt.Println(employee.getEmployeeRoleAndExperienceAsString())
}

func Struct() {
	fmt.Println("\nStruct:")
	printUserDetail()
	printEmployeeDetail()
	printEmployeeDetailUsingReceiverFuntion()
}

/*

Output:

Struct:
{Raj Mohan Jayakumar 28}
My User is Raj Mohan Jayakumar, And he/she is 28 years old

 - Nested Structs -
{Staff Software Engineer 8 {Raj Mohan Jayakumar 28}}
The Employee Raj Mohan has 8 years of experience. Currently he is working as Staff Software Engineer

 - Receiver function -
{Staff Software Engineer 8 {Raj Mohan Jayakumar 28}}
The Employee Raj Mohan has 8 years of experience. Currently he is working as Staff Software Engineer

*/
