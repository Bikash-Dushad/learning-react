import Card from './component/card'
import './App.css'

function App() {
  let obj = {
    name: " Bikash",
    age: 10
  }

  let array = [1,2,3,4,5]
  return (
    <>
    <p>hello tailwind css</p>
    <Card userName="Bikash" myobj = {obj} myarray= {array} btnText = "click me"/>
    <Card userName="Ajay" btnText="click here"/>
    </>
  )
}

export default App
