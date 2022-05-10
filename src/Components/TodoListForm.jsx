import React from 'react'
import styles from './styles.module.css'
import {useState} from 'react'

const TodoListForm = (props) => {
    const [todo, setTodo] = useState("");

    const newItem = (e) => {
        e.preventDefault();
        if (todo.length === 0){
            return;
        }

        const todoItem = {
            text: todo,
            complete: false
        }

        props.addItem(todoItem);
        setTodo("");
    }

    return (
        <div>
            <h1 className={styles.header}>To-Do List</h1>
            <form className={styles.form} onSubmit={newItem} value={todo}>
                <input id="input" className={styles.input} onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button className={styles.button}>Add to List</button>
            </form>
            <hr />
        </div>
    )
}

export default TodoListForm