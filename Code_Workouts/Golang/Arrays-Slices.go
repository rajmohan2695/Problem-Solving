package main

import "fmt"

func main() {

	// Arrays - fixed length
	var arrayOne [3]int = [3]int{1, 2, 3}
	fmt.Print(arrayOne, len(arrayOne)) // Output - [1 2 3] 3

	print("\n")

	// Arrays - fixed length - alternate syntax
	var arrayTwo = [3]int{1, 2, 3}
	fmt.Print(arrayTwo, len(arrayTwo)) // Output - [1 2 3] 3

	print("\n")

	// Slices
	var sliceOne = []int{1, 2, 3}
	fmt.Print(sliceOne) // Output - [1 2 3]
	print("\n")
	fmt.Print(append(sliceOne, 4), sliceOne) // Output - [1 2 3 4] [1 2 3]
	print("\n")
	sliceOne = append(sliceOne, 4)
	fmt.Print(sliceOne) // Output - [1 2 3 4]

	print("\n")

	// Slice - ranges
	var sliceTwo = []int{1, 2, 3, 4, 5}
	var sliceRange = sliceTwo[1:3]
	fmt.Print(sliceRange) // Output - [2 3]

}
