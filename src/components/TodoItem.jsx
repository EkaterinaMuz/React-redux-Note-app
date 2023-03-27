import { BsTrash3 } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { editTodoStart, removeTodo } from '../features/todo/todoSlice';
import TodoItemEdit from './TodoItemEdit';
import Checkbox from './Checkbox';

export default function TodoItem({ title, id, completed, date, editable }) {
  const dispatch = useDispatch();
  return (

    <>
      {editable
        ?
        <TodoItemEdit id={id} title={title} />
        :
        <>
          <div
            className='relative py-2 px-4 rounded-2xl w-full min-h-[150px] bg-zinc-800 '>

            <div
              className='flex items-center mb-2 p-2 pb-6'>
              <Checkbox completed={completed} id={id} />
              <div
                className={`min-h-fit w-full text-left grow break-all 
                ${completed.checked ? 'line-through' : 'no-underline'}`}>
                {title}
              </div>

            </div>

            <div className='flex justify-between w-[310px] absolute bottom-0 m-2'>
              <small>{date}</small>
              <span className='flex justify-between w-[50px]'>
                <AiOutlineEdit size={22}
                  onClick={() => dispatch(editTodoStart(id))}
                  className='hover:text-amber-400 transition duration-300 cursor-pointer' />
                <BsTrash3
                  onClick={() => dispatch(removeTodo(id))}
                  className='hover:text-red-600 transition duration-300 cursor-pointer' />
              </span>
            </div>

          </div>

        </>
      }
    </>

  )
};
