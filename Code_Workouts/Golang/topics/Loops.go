package topics

import "fmt"

func Loops() {
	// for loop - traditional way
	for i := 0; i <= 5; i++ {
		fmt.Println(i)
	}
	/*
		Output:
			0
			1
			2
			3
			4
			5
	*/

	// Looping an array
	names := []string{"Raj", "Mohan", "Jayakumar"}
	for index, name := range names {
		fmt.Println(index, name)
	}
	/*
		Output:
			0 Raj
			1 Mohan
			2 Jayakumar
	*/

	// Looping maps
	animalMap := make(map[string]string)
	animalMap["Dog"] = "Fido"
	animalMap["Cat"] = "Limo"
	for key, value := range animalMap {
		fmt.Println(key, value)
	}
	/*
		Output:
			Dog Fido
			Cat Limo
	*/

	// Iterating a string
	greetingString := "Hello! Good Morning"
	for index, char := range greetingString {
		fmt.Println(index, char, string(char))
	}
	/*
		Output: String are stored as byte slices in go
			0 72 H
			1 101 e
			2 108 l
			3 108 l
			4 111 o
			5 33 !
			6 32
			7 71 G
			8 111 o
			9 111 o
			10 100 d
			11 32
			12 77 M
			13 111 o
			14 114 r
			15 110 n
			16 105 i
			17 110 n
			18 103 g
	*/
}
