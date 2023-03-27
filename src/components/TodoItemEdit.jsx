import React, {useState} from 'react';
import EditButtons from '../UI/buttons/editButtons';

export default function TodoItemEdit({id, title}) {
    const [editedTitle, setEditedTitle] = useState(title);

  return (
   <>
      <div className='flex items-center py-2 px-4 min-h-[150px] rounded-2xl w-full bg-zinc-800'>
            <textarea 
            className='w-full min-h-[150px] resize-none border-none outline-none bg-transparent' 
            type='text' 
            value={editedTitle} 
            onChange={(e) => setEditedTitle(e.target.value)}  />
       </div>

        <EditButtons id={id} editedTitle={editedTitle}/>
   </>
  )
}
