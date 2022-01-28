
import './App.css';
import Header from "./component/Header.js";
import Todos from "./component/Todos.js";
import Footer from "./component/Footer.js";
import React,{useState} from 'react';
import AddTodo from "./component/AddTodo.js";




function App() {
 
  const onDelete=(todo)=>{
console.log("delete",todo);
setTodos(todos.filter((e)=>{
  return e!==todo;
}));

  }
  const addTodo=(title,desc)=>{
    let sno; 
    if(todos.length===0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
   
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
  const[todos,setTodos]=useState([
    {
        sno:1,
        title:"web framework",
        desc:"framework"
    },
    {
      sno:2,
      title:"software architecture",
      desc:"architecture"
    },
    {
    sno:3,
    title:"machine learning",
    desc:"ml"
    }
  ])
  return (
    <>
    <Header title="Todo List" />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
