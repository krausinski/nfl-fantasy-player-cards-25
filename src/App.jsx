import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import players from "./data/players.js"
import PlayerCard from './components/PlayerCard'

let renderCount = 0

function App() {
  // const player = players[0]

  const [favorites, setFavorites] = useState([]);
  const [filterFavorites, setFilterFavorites] = useState(false)
  const [filterPosition, setFilterPosition] = useState('all')

  let playersOutput = players;

  if (filterPosition != 'all') {
    playersOutput = players.filter(p => p.position.toLowerCase() === filterPosition)
  }
  
  if (filterFavorites) {
    playersOutput = playersOutput.filter(p => favorites.includes(p.id))
  }
  
  renderCount += 1

  console.log("=== START RENDER ===")
  console.log("Render count: ", renderCount)
  console.log("Players loaded: ", players.map(p => `${p.id} - ${p.name}`))
  console.log("Players favorited: ", favorites)
  console.log("Status filter button favorites: ", filterFavorites)
  console.log("=== END RENDER ===")

  function toggleFavorite(id) {
    setFavorites(prev => {
      if (prev.includes(id)) {
        console.log(`❌ removing ${players.find(p => p.id === id).name} from favorites`);
        return prev.filter(fav => fav !== id);
      } else {
        console.log(`✅ adding ${players.find(p => p.id === id).name} to favorites`);
        return [...prev, id];
      }
    });
  }

  return (
    <>
      <div
        className="header"
      >
        <h1>🏈 NFL Fantasy Player Cards 2025</h1>
        <button 
          className="btn-filter-fav"
          onClick={() => setFilterFavorites(!filterFavorites)}
        >
          {filterFavorites ? "Show all" : "Show only favorites"}
        </button>
        <div className='filter-panel-position'>
          <h4>Position</h4>
          <button
            className='btn-filter-pos-all'
            onClick={() => setFilterPosition('all')}
          >
            ALL
          </button>
          <button
            className='btn-filter-pos-qb'
            onClick={() => setFilterPosition('qb')}
          >
            QB
          </button>
          <button
            className='btn-filter-pos-rb'
            onClick={() => setFilterPosition('rb')}
          >
            RB
          </button>
          <button
            className='btn-filter-pos-wr'
            onClick={() => setFilterPosition('wr')}
          >
            WR
          </button>
          <button
            className='btn-filter-pos-te'
            onClick={() => setFilterPosition('te')}
          >
            TE
          </button>
        </div>
      </div>

      <div 
        className="player-grid"
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {/* <PlayerCard 
          player={player} 
          isFavorite={favorites.includes(player.id)}
          onToggleFavorite={toggleFavorite}
        /> */}

        {/* {players.map((player) => ( */}
        {playersOutput.map((player) => (  
          <PlayerCard 
            key={player.id}
            player={player}
            isFavorite={favorites.includes(player.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </>
  )
}

export default App
