import { useState } from "react"



function App() {
  const [color, setcolor] = useState("olive")

  return (

    <div className="w-[100vw] h-[100vh] duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => { setcolor("red") }}
          >Red</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => { setcolor("green") }}
          >Green</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => { setcolor("blue") }}
          >Blue</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "#e75480" }}
            onClick={() => { setcolor("#e75480") }}
          >Pink</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => { setcolor("black") }}
          >Violet</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => { setcolor("purple") }}
          >Purple</button>
        </div>
      </div>
    </div>

  )
}

export default App