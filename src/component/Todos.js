import React from 'react';
import TodoItem from "./TodoItem.js";

export default function Todos(props) {
  const mystyle={
    minHeight:"70vh"
  }
  return (
  <div className='container my-3' style={mystyle}>
  <h3 className='text-center'>Todo List </h3>
  {props.todos.length===0? "No Todos To Display":
  props.todos.map((todo)=>{
    return (
      <>
    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
    </>
  )})}
  

  </div>
  )
}
