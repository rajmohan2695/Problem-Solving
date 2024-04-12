package topics

import "fmt"

func withoutPointers(argument string) {
	fmt.Println("Function without pointer, Value = " + argument)
	argument = "Different Value"
	fmt.Println("Printing inside called function after change of value: " + argument)
}

func withPointers(argument *string) {
	fmt.Println("Function with pointer, Value = " + *argument)
	*argument = "Different Value"
	fmt.Println("Printing inside called function after change of value: " + *argument)
}

func Pointers() {
	fmt.Println("\nPointers:")
	var argument string = "Original Value"
	withoutPointers(argument)
	fmt.Println("Printing from main function after 'withoutPointers' function call: " + argument)
	fmt.Println()
	withPointers(&argument)
	fmt.Println("Printing from main function after 'withPointers' function call: " + argument)
}

/*
Output:

Pointers:
Function without pointer, Value = Original Value
Printing inside called function after change of value: Different Value
Printing from main function after 'withoutPointers' function call: Original Value

Function with pointer, Value = Original Value
Printing inside called function after change of value: Different Value
Printing from main function after 'withPointers' function call: Different Value
*/
