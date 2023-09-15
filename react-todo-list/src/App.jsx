import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  // it is a state, and a state means being unmutable
  // unless using the Fn. setNewItem

  return (
    <>
      <form className="new-item-form">
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
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}
