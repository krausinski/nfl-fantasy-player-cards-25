import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import players from "./data/players.js"
import PlayerCard from './components/PlayerCard'

function App() {
  const player = players[0]

  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(id) {
    setFavorites(prev => {
      if (prev.includes(id)) {
        console.log("❌ removing from favorites");
        return prev.filter(fav => fav !== id);
      } else {
        console.log("✅ adding to favorites");
        return [...prev, id];
      }
    });
  }

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
        <PlayerCard 
          player={player} 
          isFavorite={favorites.includes(player.id)}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </>
  )
}

export default App
