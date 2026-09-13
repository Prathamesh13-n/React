import { useState } from "react"

function App() {
  const [cols, setCols] = useState("olive")

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: cols }}
      >
        <div className="fixed flex flex-wrap justify-center up-3 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3.5 shadow-lg bg-white px-3 py-3 rounded-b-2xl">

            <button
              onClick={() => setCols("red")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setCols("blue")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setCols("green")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setCols("yellow")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => setCols("purple")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => setCols("orange")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => setCols("pink")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => setCols("black")}
              className="outline-none px-4 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            <button
              onClick={() => setCols("white")}
              className="outline-none px-4 py-3 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App