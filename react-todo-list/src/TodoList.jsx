import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos!"}
        {todos.map(todo => {
            // 传入todo的全部属性，并新增一个属性key
            return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        })}
      </ul>
    )
}