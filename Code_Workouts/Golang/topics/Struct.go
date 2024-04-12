package topics

import "fmt"

type User struct {
	FirstName string
	LastName  string
	Age       int64
}

func Struct() {
	fmt.Println("\nStruct:")
	user := User{
		FirstName: "Raj Mohan",
		LastName:  "Jayakumar",
		Age:       28,
	}

	fmt.Println(user)

	fmt.Printf("My User is %s %s, And he/she is %d years old\n", user.FirstName, user.LastName, user.Age)
}

/*

Output:

{Raj Mohan Jayakumar 28}
My User is Raj Mohan Jayakumar, And he/she is 28 years old

*/
