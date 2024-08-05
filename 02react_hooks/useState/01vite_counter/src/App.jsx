import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(1);
  const addValue = () =>{
    if(counter == 5){
      setCounter(0)
    }else{
      setCounter(counter+1)
    }
  }
  const reduceValue = ()=>{
    if(counter == 0){
      setCounter(5)
    }else{
      setCounter(counter-1)
    }  }

  return (
    <>
        <h1>Counter value: {counter} </h1>
        <button onClick={addValue}>increase</button>
        <button onClick={reduceValue}>reduce</button>
    </>

  )
}

export default App
