import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  // it is a state, and a state means being unmutable
  // unless using the Fn. setNewItem
  const [todos, setTodos] = useState([]) // default value is an empty array

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, //
        { id: crypto.randomUUID(), title, completed: false }, //设置3个属性，title为传入值
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          //todo.completed = completed是直观的JS做法
          //要意识到state is unmutable,必须通过setTodos这个fn来进行操作
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  //console.log(todos)

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {/* including the customized component,
      and parse into some fn./para. to realize interaction
      notice: onSubmit here is not the EventListener but a customized prop name
      */}
      <NewTodoForm onSubmit={addTodo} /> 

      <h1 className="header">Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

    </>
  )
}
