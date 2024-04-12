package topics

import "fmt"

type UserValueFunc func(*UserDetail)

type UserDetail struct {
	Name        string
	HairColor   string
	Nationality string
}

// Default User Details for UserDetail struct
func defaultUserDetail() UserDetail {
	return UserDetail{
		Name:        "Unknown",
		HairColor:   "Black",
		Nationality: "Indian",
	}
}

// Creating dynamic value allocation according to the need for User Detail
func newUserDetail(valueFuncs ...UserValueFunc) UserDetail {
	userDetail := defaultUserDetail()
	for _, valueFunc := range valueFuncs {
		valueFunc(&userDetail)
	}
	return userDetail
}

// Without getting specfic value from the user as a parameter
func withGreyHair(user *UserDetail) {
	user.HairColor = "Grey"
}

// With getting specific value from the user as a parameter
func withNationality(nationality string) UserValueFunc {
	return func(user *UserDetail) {
		user.Nationality = nationality
	}
}

func StructWithDynamicInitialization() {
	fmt.Println("\nStruct with Dynamic value initialization:")
	userDetail := defaultUserDetail()
	fmt.Println("User detail with default values:", userDetail)
	// Grey Hair
	userDetail2 := newUserDetail(withGreyHair)
	fmt.Println("User detail with dynamic values:", userDetail2)

	userDetail3 := newUserDetail(withNationality("American"), withGreyHair)
	userDetail3.Name = "Raj Mohan"
	fmt.Println("User detail with dynamic values:", userDetail3)
}

/*

Output:

User detail with default values: {Unknown Black Indian}
User detail with dynamic values: {Unknown Grey Indian}
User detail with dynamic values: {Raj Mohan Grey American}

*/
