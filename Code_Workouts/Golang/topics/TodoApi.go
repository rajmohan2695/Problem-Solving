package topics

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type todo struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	IsCompleted bool   `json:"is_completed"`
}

type error struct {
	StatusCode int    `json:"status_code"`
	Message    string `json:"message"`
}

var todoList = []todo{
	{Id: 1, Title: "Clean Room", IsCompleted: false},
	{Id: 2, Title: "Dry Clothes", IsCompleted: false},
	{Id: 3, Title: "Learn Go", IsCompleted: false},
}

func getAllTodos(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todoList)
}

func updateTodo(context *gin.Context) {
	todoIdStr := context.Param("id")
	todoId, err := strconv.Atoi(todoIdStr)
	if err != nil {
		context.IndentedJSON(http.StatusBadRequest, "Invalid ID")
		return
	}
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
	context.IndentedJSON(http.StatusOK, "Todo Updated Successfully")
}

func addTodo(context *gin.Context) {
	var newTodo todo
	if err := context.BindJSON(&newTodo); err != nil {
		context.IndentedJSON(http.StatusBadRequest, error{StatusCode: http.StatusBadRequest, Message: "Bad Request"})
		return
	}
	newTodo.Id = len(todoList) + 1
	todoList = append(todoList, newTodo)
	context.IndentedJSON(http.StatusOK, todoList)
}

func TodoApiInit() {
	router := gin.Default()
	router.GET("/todos", getAllTodos)
	router.POST("/todo", addTodo)
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
