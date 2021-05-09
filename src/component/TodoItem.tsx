import React, { CSSProperties } from 'react';
import {Todo} from '../modules/todos'

type TodoItemProps ={
    todo: Todo
    onToggle:(id:number)=> void;
    onRemove:(id:number)=> void;
}



function TodoItem ({todo, onToggle, onRemove}:TodoItemProps){
    const removeStyle:CSSProperties={
        color:'red',
        marginLeft:8
    };
    const toggleStyle:CSSProperties={
        textDecoration: todo.done ? 'line-through' : 'none'
    };
    const handleToggle = () => onToggle(todo.id);
    const handleRemove = () => onRemove(todo.id);
    return (
        <li>
            <span onClick={handleToggle} style={toggleStyle}>{todo.text}</span>
            <span onClick={handleRemove} style={removeStyle}> (X) </span>
        </li>
    )
}

export default TodoItem