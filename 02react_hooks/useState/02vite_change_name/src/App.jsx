import { useState } from 'react'


function App() {
  let names = ['a', 'b', 'c', 'd','e']
  const [name, setName] = useState(names[0])

  const changeName = ()=>{
    let currentIndex = names.indexOf(name)
    let nextIndex = (currentIndex + 1);
    setName(names[nextIndex])
    if(nextIndex==names.length){
      setName(names[0])
    }

  }

  return (
    <>
    <h1> {name}</h1>
    <button onClick={changeName}>change</button>
    </>
  )
}

export default App
