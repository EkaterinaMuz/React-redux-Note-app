import React from 'react'
import { useSelector } from 'react-redux';
import { activeTodoLength, doneTodoLength, selectTodoItems } from '../features/todo/todoSlice';
import Button from '../UI/buttons/button'

export default function Filters() {
  const activeTodos = useSelector(activeTodoLength)
  const doneTodos  = useSelector(doneTodoLength)
  const allTodos = useSelector(selectTodoItems).length

  return (
    <div className="flex space-x-4 mt-4">
        <Button filter='All'>All: {allTodos} </Button>
        <Button filter='Active'>Active: {activeTodos}</Button>
        <Button filter='Done'>Done: {doneTodos}</Button>
  </div>
  )
}
