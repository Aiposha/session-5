import { useState } from "react"
import TodoForm from "./components/TodoForm"
import Todolist from "./components/Todolist"




function App() {
  const [todos,setTodos] = useState([])

const onNewTodo = (newTodo) => {
setTodos([...todos, newTodo])
}
const onDeleteItem = (id) => {
  const newFilteredTodos = todos.filter((item) => item.id !== id)
  setTodos(newFilteredTodos)
}
  return(
    <div>
      <TodoForm onNewTodo={onNewTodo}/>
      <Todolist todos={todos } onDeleteItem={onDeleteItem}/>
    </div>
  )
}

export default App
