package main

import "fmt"

func main() {
	// print sample
	fmt.Print("Hello, World!")

	print("\n")

	// if else
	a := "10"
	if a == "10" {
		fmt.Printf("On Control")
	} else {
		fmt.Printf("Off Control")
	}

	print("\n")

	// if else - Initialize variable inside if
	if a := "10"; a == "10" {
		fmt.Printf("On Control")
	} else {
		fmt.Printf("Off Control")
	}

	print("\n")

	// if else - multiple conditions
	number := 10
	if number > 9 {
		print("Hello")
	} else if 0 < number && number < 9 {
		print("Between 0 and 9")
	} else {
		print("Bye")
	}

	print("\n")

	// for - traditional way
	for a := 1; a < 10; a++ {
		fmt.Printf("%d", a)
	}

	print("\n")

	// for - with count
	var b = 1
	for b < 10 {
		fmt.Printf("%d", b)
		b++
	}

	print("\n")

	// for - infite loop
	for {
		print("Infinite loop")
		break
	}

	print("\n")

	// switch - basic
	c := "Sunday"
	switch c {
	case "Sunday":
		fmt.Print("It's a holiday")
	default:
		fmt.Print("It's a weekday")
	}

	print("\n")

	// switch - multiple conditions
	switch c {
	case "Sunday", "Saturday":
		fmt.Print("It's a holiday")
	default:
		fmt.Print("It's a weekday")
	}

	print("\n")

	// switch - true as key by default if we don't mention key explicitly
	switch {
	case c == "Sunday":
		{
			fmt.Print("It's Sunday")
		}
	}

	print("\n")

}
