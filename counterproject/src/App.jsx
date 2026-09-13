import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("clicked", counter, Math.random())
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("clicked", counter, Math.random())
    }
  }

  const restart = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>
        ViperX doing a react
      </h1>

      <h2>
        Counter Value: {counter}
      </h2>

      <button onClick={addValue}>
        Add Value {counter}
      </button>

      <br />

      <button onClick={removeValue}>
        Remove Value
      </button>
<br />
      <button onClick={restart}>
        Restart
      </button>
    </>
  )
}

export default App