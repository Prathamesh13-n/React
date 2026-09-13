import { useState, useCallback, useEffect } from 'react'

function App() {
  const [len, setLen] = useState(8)
  const [numberallow, setNumberallow] = useState(false)
  const [charAllowed, setCharallow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordgen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallow) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~"

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [len, numberallow, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgen()
  }, [len, numberallow, charAllowed, passwordgen])

  return (
    <>
      <h1 className="text-5xl text-center text-white">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-green-500 bg-gray-900">

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />

          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>

        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(Number(e.target.value))
              }}
            />

            <label>
              Length: {len}
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberallow}
              id="numberInput"
              onChange={() => {
                setNumberallow((prev) => !prev)
              }}
            />

            <label htmlFor="numberInput">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharallow((prev) => !prev)
              }}
            />

            <label htmlFor="characterInput">
              Characters
            </label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App