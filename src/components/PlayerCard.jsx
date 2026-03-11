const PlayerCard = ({ player }) => {
    return(
        <div
            style={{
                border: "solid 2px black",
                borderRadius: 6,
                maxWidth: 300,
                padding: 20,
                backgroundColor: "#868788"
            }}
        >
            <img className="playerPic" src={`/players/${player.id}.png`} />
            <h3>{player.name}</h3>
            <p>{player.position}</p>
            
            <img className="teamLogo" src={`https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/${player.teamShort}.png`} />
            <p>{player.team}</p>
            
            <div className="stats">
                <p>Fantasy Points: {player.fantasyPoints}</p>
                <p>Points per Game: {player.fantasyPpg}</p>
                <p>Rank Overall: {player.fantasyFinishOverall}</p>
                <p>Rank Position: {player.fantasyFinishPosition}</p>
            </div>
        </div>
    )
}

export default PlayerCard