package topics

import "fmt"

// Here this function name starts with small s, So this cannot be used in other files expect this file
func sampleFunction() string {
	return "sampleFunction"
}

// Here this function name starts with capital S, So this can be used in other files
func SampleFunction() string {
	return "SampleFunction"
}

func withMultipleReturnValues() (string, int64) {
	return "Raj Mohan", 28
}

func Function() {
	fmt.Println("\nFunctions:")
	output1 := sampleFunction()
	fmt.Println(output1)
	output2 := SampleFunction()
	fmt.Println(output2)
	name, age := withMultipleReturnValues()
	fmt.Printf("Hi, My name is %s and I am %d years old\n", name, age)
}

/*

Output:

sampleFunction
SampleFunction
Hi, My name is Raj Mohan and I am 28 years old

*/
