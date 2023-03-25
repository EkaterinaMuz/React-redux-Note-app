import React from 'react'
import { useSelector } from 'react-redux';
import { activeTodoLength, doneTodoLength, selectTodoItems } from '../features/todo/todoSlice';
import ButtonFilter from '../UI/buttons/ButtonFilter'

export default function Filters() {
  const activeTodos = useSelector(activeTodoLength)
  const doneTodos  = useSelector(doneTodoLength)
  const allTodos = useSelector(selectTodoItems).length

  return (
    <div className="flex space-x-4 mt-4">
        <ButtonFilter filter='All'>All: {allTodos} </ButtonFilter>
        <ButtonFilter filter='Active'>Active: {activeTodos}</ButtonFilter>
        <ButtonFilter filter='Done'>Done: {doneTodos}</ButtonFilter>
  </div>
  )
}
