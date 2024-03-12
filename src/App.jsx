import './App.css'
import Counter from './Counter';
import Team from './Team';


function App() {
  function handleClick(){
    alert('Button Cliked');
  }


  const handleClick2 = () => {
    alert('Button 2 clicked')
  }

  const addTofive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Team></Team>

      <Counter></Counter>



      {/* <button onclick = "handleClick()">Click Me</button>  */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={()=>{alert('Third Clicked')}}>Third</button>
      <button onClick={() => addTofive(3)}>Four</button>
    </>
  )
}
export default App
