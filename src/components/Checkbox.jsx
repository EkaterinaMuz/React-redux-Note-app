import React from 'react';
import { useDispatch } from 'react-redux';
import { ImCheckboxUnchecked } from 'react-icons/im';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { toggleTodo } from '../features/todo/todoSlice';

export default function Checkbox({completed, id}) {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(toggleTodo(id))}>
            {
                completed.checked
                    ?
                    <BsFillCheckSquareFill size={22}
                        className='text-sky-500 mr-4' />
                    :
                    <ImCheckboxUnchecked size={22}
                        className='text-sky-500 mr-4' />
            }
        </div>
    )
};
