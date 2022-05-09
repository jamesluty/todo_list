import React from 'react'
import styles from './styles.module.css'
import {useState} from 'react'

const TodoList = (props) => {
    const deleteItem = (idx) => {
        const filteredTodos = props.todoList.filter((todo, id) => {
            return id !== idx;
        })
        props.setTodoList(filteredTodos)
    }

    const boxChange = (idx) => {
        const newList = props.todoList.map((todo, id) => {
            if (idx === id){
            // todo.complete = !todo.complete
            const updateList = {...todo, complete: !todo.complete}
            return updateList
        }
        return todo;
        })
        props.setTodoList(newList)
    }

    return(
        <div>
            <h2>Your To-Do List</h2>
            <div>
            {props.todoList.map( (item, idx) => {
                const todoClasses = []

                if (item.complete === true) {
                    todoClasses.push(styles.strike)
                }

                return (
                    <div key={idx} className={styles.listItems}>
                        <p className={todoClasses.join(" ")}>{item.text}</p>
                        <input className={styles.checkbox} checked={item.complete} type="checkbox" onChange={(e) => boxChange(idx)}/>
                        <button className={styles.button2} onClick={(e) => deleteItem(idx)}>Delete</button>
                    </div>
                )
            }
            )}
            </div>
        </div>
    )
}

export default TodoList