package topics

import "fmt"

func ArraysSlices() {
	fmt.Println("\nArrays and Slices:")

	// Arrays - fixed length
	var arrayOne [3]int = [3]int{1, 2, 3}
	fmt.Println(arrayOne, len(arrayOne)) // Output - [1 2 3] 3

	// Arrays - fixed length - alternate syntax
	var arrayTwo = [3]int{1, 2, 3}
	fmt.Println(arrayTwo, len(arrayTwo)) // Output - [1 2 3] 3

	// Slices
	var sliceOne = []int{1, 2, 3}
	fmt.Println(sliceOne)                      // Output - [1 2 3]
	fmt.Println(append(sliceOne, 4), sliceOne) // Output - [1 2 3 4] [1 2 3]
	sliceOne = append(sliceOne, 4)
	fmt.Println(sliceOne) // Output - [1 2 3 4]

	// Slice - ranges
	var sliceTwo = []int{1, 2, 3, 4, 5}
	var sliceRange = sliceTwo[1:3]
	fmt.Println(sliceRange) // Output - [2 3]

}
