import React, { useRef, useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slice/todo";

const Todo = () => {
    const inputRef=useRef();
    const todoList=useSelector(state=>state.todo.list);
    const dispatch=useDispatch();
  return (
    <div className="bg-white w-11/12 place-self-center max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex justify-center items-center mt-7 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      <div className="flex my-7 bg-gray-200 rounded-full">
        <input ref={inputRef} className="bg-transparent outline-none border-none h-14 flex-1 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="add your task "/>
        <button onClick={()=>{
        const inputText=inputRef.current.value.trim();
        if(inputText==="") return null;
        dispatch(addTodo(inputText));
        inputRef.current.value="";
        }} className="bg-orange-600 w-32 h-14 rounded-full text-white text-lg font-medium">ADD+</button>
      </div>
      <div>
        {todoList.map((item,index)=>{
            console.log(item);
            return <ToDoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete}/>
        })}       
      </div>
    </div>
  );
};

export default Todo;
