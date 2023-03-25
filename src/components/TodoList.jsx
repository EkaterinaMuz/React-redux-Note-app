import React, { useEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { selectActiveFilter } from '../features/filter/filterSlice';
import {selectEditable, selectFilteredTodo} from '../features/todo/todoSlice';
import Filters from './Filters';
import Input from './Input';
import TodoItem from './TodoItem';

export default function TodoList() {
    const filter = useSelector(selectActiveFilter);
    const todos = useSelector((state) => selectFilteredTodo(state, filter));
    const editable = useSelector(selectEditable);
   
    useEffect(() => {

    }, [editable])

  return (
    <>
        <div>
            <h1 className='text-3xl text-bold text-center'>Today's task</h1>
            <Input/>
            <Filters/>
            {!todos.length && 
                <div className='text-center mt-40 text-gray-700 text-bold'>There is nothing here yet!</div>}
            

            <ul className='grid grid-cols-3 gap-4 mt-8'>

                {
                todos.map(todo => 
                    
                    <li key={todo.id}>
                        <TodoItem {...todo}/>
                    </li>
                )}
            </ul>
            
        </div>
    </>
  )
}
