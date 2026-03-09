import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import players from "./data/players"

function App() {
  return (
    <div>
      <h1>🏈 NFL Fantasy Player Cards 2025</h1>
      <p><b>🏆 Fantasy MVP 2023:</b> {players.find(p => p.fantasyFinishOverall === 1).name}</p>
    </div>
  )
}

export default App
