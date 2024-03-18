import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <h1 className='text-emerald-600'>Hello developers</h1>
       <h2 className='text-orange-600' >Ooops</h2>
    </div>
  )
}

export default App
