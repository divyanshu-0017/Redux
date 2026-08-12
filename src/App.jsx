import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './features/counter/counter'
import TodoApp from "./features/todo/TodoApp";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React.js</h1>
      {/* <Counter/> */}
      <TodoApp/>
      
    </>
  )
}

export default App;
