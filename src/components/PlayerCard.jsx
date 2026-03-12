import './PlayerCard.css'

const PlayerCard = ({ player }) => {
    return(
        <div className='card'>
            <button className="favorite-btn">★</button>
            <img className="playerPic" src={`/players/${player.id}.png`} />
            <h2>{player.name}</h2>
            <p style={{margin: 0}}>
                {player.position} | {player.team}
            </p>
            
            {/* <img className="teamLogo" src={`https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/${player.teamShort}.png`} /> */}
            
            <div className="stats">
                <div className="stat-tile">
                    <div className="stat-value">{player.fantasyPoints}</div>
                    <div className="stat-label">Fantasy Points</div>
                </div>
                <div className="stat-tile">
                    <div className="stat-value">{player.fantasyPpg}</div>
                    <div className="stat-label">Points per Game</div>
                </div>
                <div className="stat-tile">
                    <div className="stat-value">{player.fantasyFinishOverall}</div>
                    <div className="stat-label">Rank Overall</div>
                </div>
                <div className="stat-tile">
                    <div className="stat-value">{player.fantasyFinishPosition}</div>
                    <div className="stat-label">Rank Position</div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard