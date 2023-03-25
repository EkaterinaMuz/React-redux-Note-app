import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveFilter, toggleFilter } from '../../features/filter/filterSlice';

export default function ButtonFilter({children, filter}) {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  
  return (
    <button onClick={() => dispatch(toggleFilter(filter))} className={`${activeFilter === filter ? 'bg-gray-700 text-white' : 'text-gray-300'} hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>
      {children}
    </button>

  )
};
