import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])


  return (
    <>
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

export default App
