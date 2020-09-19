import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game.js'

const Games = ({games, pickGame}) => {
    return (
        <div>
            {
                <ul>
                    { 
                        games.map(game => {
                            return (
                                <Game key={game.id} pickGame={pickGame} game={game}/>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default Games