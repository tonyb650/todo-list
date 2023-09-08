import React from 'react'
import { useState } from 'react'

function TodoForm(props) {
    const [todoText, setTodoText] = useState("")
    const { todoList, setTodoList } = props

    // handler when we click "Add Todo" button
    // prevents the re-render of the page
    // then uses setter to append an object to the todoList.
    // Notice the spread notation with setter.
    // 'incomplete' key tracks if a task is completed or not
    const handleAddTodo = (e) => {
        e.preventDefault()
        setTodoList([ ...todoList, {'text':todoText, 'incomplete':true} ])
        setTodoText("") // clear the form field after 'saving'/setting with this line
    }


    // 2 way binding of todoText in form
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText} />
                <button>Add Todo</button>
            </form>
            
        </div>
    )
}

export default TodoForm

