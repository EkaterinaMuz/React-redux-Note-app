import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IoAddCircleSharp} from 'react-icons/io5';
import { addTodo, selectTodoValue } from '../features/todo/todoSlice';

export default function Input() {
    const dispatch = useDispatch();
    const value = useSelector(selectTodoValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.title.value) {
          dispatch(addTodo(e.target.title.value))
          e.target.reset();
        }
        

    };
  return (
    <form onSubmit={handleSubmit} className='flex justify-between items-center max-h-52 py-2 px-4 mt-6 rounded-2xl border-zinc-800 border-2'>
        <IoAddCircleSharp size={22} className='mr-2 text-sky-500'/>
        <input type='text' placeholder='Add a task' name='title' value={value}
        className=' resize-none border-none outline-none bg-transparent w-full h-full' 
    />
    </form>
  )
}
