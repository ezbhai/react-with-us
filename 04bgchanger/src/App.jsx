import { useState,useEffect} from "react"


function App() {
  const [color, setColor] = useState("olive")
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])


  return (
    <div className="w-full h-screen duration-200"
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("Violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Violet"}}
          >Violet</button>
          <button
          onClick={() => setColor("Orchid")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orchid"}}
          >Orchid</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App