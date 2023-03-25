import React from 'react';
import { editCancel, updateTodo } from '../../features/todo/todoSlice';
import {useDispatch} from 'react-redux';

export default function EditButtons({id, editedTitle}) {

  const dispatch = useDispatch();

  return (
    <div className='flex justify-end w-full mt-4'>
    <button onClick={() => dispatch(editCancel(id))} className='bg-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mr-2 text-sm font-medium'>
        Cancel
    </button>
    <button onClick={() => dispatch(updateTodo({id, editedTitle}))} className='bg-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
        Save
    </button>
  </div>
  )
}
