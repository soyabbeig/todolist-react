import React, { useState } from 'react';

export default function AddTodo(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description can not be empty")
        }
        props.addTodo(title,desc);
    }
  return <div className='container'>
      <h3 className='text-center'>Add a Todo</h3>
      <form onSubmit={submit}>
      <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Descreption</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
  </div>;
}
