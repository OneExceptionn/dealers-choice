import React from 'react'

const Game = ({game}) => {
    return (
        <div>
            <a href={`#${game.id}`}>{game.name}
            </a>
        </div> 
    )
}

export default Game