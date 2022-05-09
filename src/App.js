import './App.css';
import {useState} from 'react'
import TodoList from './Components/TodoList';
import TodoListForm from './Components/TodoListForm';
import styles from './Components/styles.module.css'

function App() {
  const [list, setList] = useState([])
  
  const addItem = (item) => {
    setList([...list, item])
  }

  return (
    <div className={styles.wrapper}>
      <TodoListForm addItem={addItem}/>
      <TodoList todoList={list} setTodoList={setList}/>
    </div>
  );
}

export default App;
