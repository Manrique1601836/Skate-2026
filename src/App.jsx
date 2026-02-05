import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Views from './pages/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Views/>
    </>
  )
}

export default App
