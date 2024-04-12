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
	var argument string = "Original Value"
	withoutPointers(argument)
	fmt.Println("Printing from main function after withoutPointers function call: " + argument)
	withPointers(&argument)
	fmt.Println("Printing from main function after withPointers function call: " + argument)
}
