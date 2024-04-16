package topics

import "fmt"

func Maps() {
	myMap := make(map[string]string)
	myMap["Red"] = "Color"
	myMap["East"] = "Direction"

	fmt.Println(myMap["Red"], myMap["East"]) // Output: Color Direction

	myMap["Red"] = "None"

	fmt.Println(myMap["Red"], myMap["East"]) // Output: None Direction

	type UserData struct {
		HairColor string
		Age       int64
	}

	userMap := make(map[string]UserData)

	userMap["Raj"] = UserData{
		HairColor: "Black",
		Age:       28,
	}

	userMap["Martin"] = UserData{
		HairColor: "Grey",
		Age:       30,
	}

	fmt.Println(userMap["Raj"], userMap["Martin"]) // Output: {Black 28} {Grey 30}

	RajData := UserData{
		HairColor: "Brown",
		Age:       30,
	}

	MartinData := UserData{
		HairColor: "Black",
		Age:       22,
	}

	newUserMap := make(map[UserData]string)

	newUserMap[RajData] = "Raj"
	newUserMap[MartinData] = "Martin"

	fmt.Println(newUserMap[RajData], newUserMap[UserData{
		HairColor: "Black",
		Age:       22,
	}])

	// Output: Raj Martin

}
