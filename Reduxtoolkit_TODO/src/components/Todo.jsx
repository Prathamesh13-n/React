import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos)

  const dispatch = useDispatch()

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-5">
        My Todos
      </h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between 
          bg-gray-800 p-4 mb-3 rounded"
        >
          <span className="text-white">
            {todo.text}
          </span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 text-white px-4 py-2 rounded 
            hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todo