import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

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

      <ul className="list">
        {todos.length === 0 && "No Todos!"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)} //fn. to handle the CHECK action
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
