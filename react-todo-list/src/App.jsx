import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("") // default value is ""
  // it is a state, and a state means being unmutable
  // unless using the Fn. setNewItem

  const [todos, setTodos] = useState([]) // default value is an empty array

  function handleSubmit(e) {
    e.preventDefault() //组织浏览器默认的提交form行为，因为我们想要为submit设置自定义逻辑

    //setTodos函数用于更新todos
    setTodos(currentTodos => {
      return [
        ...currentTodos, //
        { id: crypto.randomUUID(), title: newItem, completed: false}, //设置3个属性
      ]
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} //指定为newItem变量
            onChange={e => setNewItem(e.target.value)} //将任何input设置为newItem，state改变，react will rerun the App
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
