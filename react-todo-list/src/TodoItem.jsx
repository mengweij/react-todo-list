
export function TodoItem({ id, completed, title }) {
    return (
        <li>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                //   onChange={e => toggleTodo(id, e.target.checked)} //fn. to handle the CHECK action
                />
                {title}
              </label>
              <button
                // onClick={() => deleteTodo(id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
    )
}