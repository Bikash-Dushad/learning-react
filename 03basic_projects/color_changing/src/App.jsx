
// import './App.css'

import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  let changeColor = (color)=>{
    setColor(color)
  }

  return (
    <>
    <div style={{ backgroundColor: color, height:"100vh"}}>
        <button onClick={()=>changeColor('blue')} style={{backgroundColor: "blue"}}>blue</button>
        <button onClick={()=>changeColor('green')} style={{backgroundColor: "green"}}>green</button>
        <button onClick={()=>changeColor('yellow')} style={{backgroundColor: "yellow"}}>yellow</button>
        <button onClick={()=>changeColor('purple')} style={{backgroundColor: "purple"}}>purple</button>
        <button onClick={()=>changeColor('red')} style={{backgroundColor: "red"}}>red</button>
        <button onClick={()=>changeColor('orange')} style={{backgroundColor: "orange"}}>orange</button>
        <button onClick={()=>changeColor('brown')} style={{backgroundColor: "brown"}}>brown</button>
        <button onClick={()=>changeColor('pink')} style={{backgroundColor: "pink"}}>pink</button>
      </div>
    </>
  )
}

export default App
