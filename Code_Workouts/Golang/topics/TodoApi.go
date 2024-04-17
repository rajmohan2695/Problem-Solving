package topics

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type todo struct {
	Id          string `json:"id"`
	Title       string `json:"title"`
	IsCompleted bool   `json:"is_completed"`
}

type error struct {
	StatusCode int    `json:"status_code"`
	Message    string `json:"message"`
}

var todoList = []todo{
	{Id: "1", Title: "Clean Room", IsCompleted: false},
	{Id: "2", Title: "Dry Clothes", IsCompleted: false},
	{Id: "3", Title: "Learn Go", IsCompleted: false},
}

func getAllTodos(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todoList)
}

func updateTodo(context *gin.Context) {
	todoId := context.Param("id")
	var updateTodoValue todo
	if err := context.BindJSON(&updateTodoValue); err != nil {
		context.IndentedJSON(http.StatusBadRequest, error{StatusCode: http.StatusBadRequest, Message: "Bad Request"})
		return
	}
	for i, todo := range todoList {
		if todo.Id == todoId {
			todoList[i].IsCompleted = updateTodoValue.IsCompleted
			todoList[i].Title = updateTodoValue.Title
			break
		}
	}
	context.IndentedJSON(http.StatusAccepted, "Todo Updated Successfully")

}

func TodoApiInit() {
	router := gin.Default()
	router.GET("/todos", getAllTodos)
	router.PATCH("/todo/:id", updateTodo)
	router.Run("localhost:8181")
}

// Requests and Output

/*

Request:
curl --location 'localhost:8181/todos'
Response:
[
    {
        "id": "1",
        "title": "Clean Room",
        "is_completed": false
    },
    {
        "id": "2",
        "title": "Dry Clothes",
        "is_completed": false
    },
    {
        "id": "3",
        "title": "Learn Go",
        "is_completed": false
    }
]

*/
