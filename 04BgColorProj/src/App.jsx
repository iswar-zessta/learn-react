import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-lg">
          <button
            onClick={() => setColor("red")}
            className="outline-none rounded-full text-white px-4 py-1  shadow-2xl" style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none rounded-full text-white px-4 py-1  shadow-2xl" style={{ backgroundColor: "green" }}>Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none rounded-full text-white px-4 py-1  shadow-2xl" style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none rounded-full text-white px-4 py-1  shadow-2xl" style={{ backgroundColor: "olive" }}>Olive</button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none rounded-full text-white px-4 py-1  shadow-2xl" style={{ backgroundColor: "gray" }}>Gray</button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none rounded-full text-black px-4 py-1  shadow-2xl" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none rounded-full text-balck px-4 py-1  shadow-2xl" style={{ backgroundColor: "pink" }}>Pink</button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none rounded-full text-white px-4 py-1 shadow-2xl" style={{ backgroundColor: "purple" }}>Purple</button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none rounded-full text-black px-4 py-1  shadow-2xl" style={{ backgroundColor: "lavender" }}>Lavender</button>
          <button
            onClick={() => setColor("white")}
            className="outline-none rounded-full text-black px-4 py-1  shadow-2xl" style={{ backgroundColor: "white" }}>White</button>
          <button
            onClick={() => setColor("black")}
            className="outline-none rounded-full px-4 py-1 text-white shadow-2xl" style={{ backgroundColor: "black" }}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
