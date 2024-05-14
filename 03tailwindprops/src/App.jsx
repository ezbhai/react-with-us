import './App.css'
import Card from './component/card'


function App() {
  let myObj = {
    username: "varun",
    btnText: "buy coffee for me "
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username={myObj.username} btnText={myObj.btnText}  />
    </>
  )
}

export default App
