import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")

  return (
    <>
      <input type="text"   
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <div>{text}</div>
    </>
  )
}

export default App
