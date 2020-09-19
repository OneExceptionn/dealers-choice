import React from 'react'
import ReactDOM from 'react-dom'

const SingleGame = ({game}) => {
    return (
        <div id='game'>
            <br></br>
            <img src={game.image} width="150" height="100"></img>
            <ul>
                <li>Name: {game.name}</li>
                <li>Genre: {game.genre}</li>
                <li>Max Players: {game.maxPlayers}</li>
                <li>MetaCritic Rating: {game.rating}</li>
            </ul>
        </div> 
    )
}

export default SingleGame