import React from 'react'
import { useState } from 'react'

const strikeStyle = {
    textDecoration: 'line-through',
}

function TodoList(props) {
    // destructure props into local variables 
    // 'todoList' setter function and 'setTodoList' getter function
    const { todoList, setTodoList } = props;

    // This function toggles the value in the todoList by creating a copy of the todoList
    // toggling the value of the 'incomplete' value at [index] and then using our
    // setter to replace the entire array in todoList
    const handleCompleteBox = (index) =>
    {
        let tempList = [...todoList]
        tempList[index].incomplete = !tempList[index].incomplete // toggle incomplete flag
        setTodoList(tempList); 
    }

    // This functions handle when the 'delete' button is clicked
    // We use .filter to keep all elements in the todoList array EXCEPT the 
    // element with the passed-in 'index'
    const handleDelete = (index) =>
    {
        setTodoList( todoList.filter((currentVal,currentIndex) =>  index != currentIndex ))
    }

    // making a table with a <tr> for each element in the 'todoList'
    // First <td> is the 'element.text' (conditionally rendered with style if 
    // 'element.incomplete' == true)
    // Second <td> is the 'checkbox' (conditionally rendered as an empty/full box
    // based on the value of 'element.incomplete'). Calls 'handleCompleteBox' if clicked
    // Third <td> is the 'delete' button. This calls 'handleDelete' if clicked
    return (
        <div>
            <h2>TodoList</h2>
            <table>
                <tbody>
                {todoList.map(
                    (element,index) => {
                        return (
                            <tr key={index}>
                                {element.incomplete==true ? 
                                <td>{element.text}</td>
                                :<td style={strikeStyle}>{element.text}</td>
                                }
                                {element.incomplete==true ? 
                                    <td onClick={(e) => handleCompleteBox(index)}>☐</td>:
                                    <td onClick={(e) => handleCompleteBox(index)}>☑</td>}
                                <td><button onClick={(e) => handleDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList