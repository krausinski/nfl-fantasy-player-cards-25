import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import players from "./data/players.js"
import PlayerCard from './components/PlayerCard'

function App() {
  const player = players[0]

  return (
    <>
      <div>
        {/* <img src='/players/4.png' /> */}
        <h1>🏈 NFL Fantasy Player Cards 2025</h1>
        <p><b>🏆 Fantasy MVP 2023:</b> {players.find(p => p.fantasyFinishOverall === 1).name} ({players.find(p => p.fantasyFinishOverall === 1).team})</p>
      </div>

      <div 
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <PlayerCard player={player} />
      </div>
    </>
  )
}

export default App
