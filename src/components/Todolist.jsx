import React from 'react'
import ToDoitem from './ToDoitem'

const Todolist = ({todos, onDeleteItem}) => {
  return (
    <ul>
      {todos?.map((el) => <ToDoitem key={el.id} {...el} onDeleteItem={onDeleteItem}/>)}
    </ul>
  )
}

export default Todolist



