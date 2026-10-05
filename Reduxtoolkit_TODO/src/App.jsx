import React from 'react'
import AddTodos from './components/AddTodos'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <div className="max-w-2xl mx-auto">
        
        <h1 className="text-4xl font-bold text-white text-center">
          Redux Toolkit Todo App
        </h1>

        <AddTodos />

        <Todo />

      </div>
    </div>
  )
}

export default App