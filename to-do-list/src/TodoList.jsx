import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...todos, { task: newTodo, id: uuidv4(), isDone: false }]
        })
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    let delelteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id))
    }
    let upperCaseAll = () => {
        setTodos(
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
        )
    }
    let uppercaseOne = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                }
                else return todo
            })
        )
    }
    let markDone = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    }
                }
                else return todo
            })
        )
    }
    let markAllDone = (id) => {
        setTodos(
            todos.map((todo) => {
               
                return {
                    ...todo,
                    isDone: true,
                }
            })
        )
    }

    return (<div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
        <button onClick={addNewTask}>Add Task</button>
        <br />
        <br />
        <br />
        <h4>Tasks Todo</h4>
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id} >
                    <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => delelteTodo(todo.id)}>Delete</button>
                    <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
                    <button onClick={() => markDone(todo.id)}>Mark as Done</button>
                </li>
            })}
        </ul>
        <button onClick={upperCaseAll}>To Uppercase</button>
        <button onClick={markAllDone}>Mark all as Done</button>
    </div>)
}