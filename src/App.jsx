import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Portada from './Components/Portada'
import Card from './Components/Card'
import Biografia from './Components/Biografia'
import Charla from './Components/Charla'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-100 relative'>
      <Navbar></Navbar>
      <Portada></Portada>
      <Biografia></Biografia>
      <Charla></Charla>
      <Card></Card>
    </div>
  )
}

export default App
