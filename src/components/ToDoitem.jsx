import React from 'react'

const ToDoitem = ({title, id, onDeleteItem}) => {
  return (
    <li>{title} <button onClick={() =>onDeleteItem(id)}>delete</button></li>
  )
}

export default ToDoitem
