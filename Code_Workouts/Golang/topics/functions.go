package topics

import "fmt"

// Here this function name starts with small s, So this cannot be used in other files expect this file
func sampleFunction() string {
	return "Hi"
}

// Here this function name starts with capital S, So this can be used in other files
func SampleFunction() string {
	return "Hello"
}

func FunctionMain() {
	output1 := sampleFunction()
	fmt.Println(output1)
	output2 := SampleFunction()
	fmt.Println(output2)
}

/*

Output:

Hi
Hello

*/
