import { useState } from "react"

export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("") // default value is ""

    function handleSubmit(e) {
        e.preventDefault() //组织浏览器默认的提交form行为，因为我们想要为submit设置自定义逻辑

        if (newItem === "") return
        
        props.onSubmit(newItem)

        setNewItem("") //提交后将输入框状态充值为“”
    }

    return (
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
    )
}