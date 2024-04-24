package topics

import "fmt"

func Basics() {
	fmt.Println("\nBasics:")
	// print sample
	fmt.Print("Hello, World!") // Output: Hello, World!

	print("\n")

	// if else
	a := "10"
	if a == "10" {
		fmt.Printf("On Control")
	} else {
		fmt.Printf("Off Control")
	}

	// Output: On Control

	print("\n")

	// if else - Initialize variable inside if
	if a := "10"; a == "10" {
		fmt.Printf("On Control")
	} else {
		fmt.Printf("Off Control")
	}

	// Output: On Control

	print("\n")

	// if else - multiple conditions
	number := 5
	if number > 9 {
		print("Greater than 9")
	} else if 4 < number && number < 9 {
		print("Between 4 and 9")
	} else {
		print("Smaller than 4")
	}

	// Output: Between 4 and 9

	print("\n")

	// for - with count
	var b = 1
	for b < 10 {
		fmt.Printf("%d", b)
		b++
	}

	// Output: 123456789

	print("\n")

	// for - infite loop
	for {
		print("Infinite loop")
		break
	}
	// This is an infinite loop until it breaks using break statement
	// Output: Infinite loop

	print("\n")

	// switch - basic
	c := "Sunday"
	switch c {
	case "Sunday":
		fmt.Print("It's a holiday")
	default:
		fmt.Print("It's a weekday")
	}

	// Output: It's a holiday

	print("\n")

	// switch - multiple conditions
	switch c {
	case "Sunday", "Saturday":
		fmt.Print("It's a holiday")
	default:
		fmt.Print("It's a weekday")
	}

	// Output: It's a holiday

	print("\n")

	// switch - true as key by default if we don't mention key explicitly
	switch {
	case c == "Sunday":
		{
			fmt.Print("It's Sunday")
		}
	}

	// Output: It's Sunday

	print("\n")

}
