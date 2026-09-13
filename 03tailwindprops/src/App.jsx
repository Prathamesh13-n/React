import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [count , setCount] = useState(0)
  let myObj = {
    username : "viperx",
    age: 21

  }
  let newArr = [1,2,3,4,5]
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="mb-10 rounded-xl bg-green-400 p-4 text-center text-3xl font-bold text-black">
        Tailwind Test
      </h1>

      <div className="flex justify-center">
        <Card username ="viperx"  btnTxt = "tap me"/>
        <Card username='Rougex' btnTxt="click me"/>
        <Card />
      </div>

    </div>
  )
}

export default App