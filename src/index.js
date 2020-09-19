import React from 'react'
import ReactDOM from 'react-dom'
import Games from './Games'
import axios from 'axios'
import SingleGame from './SingleGame'

class Main extends React.Component {
    constructor() {
        super() 
        this.state = {
            games: [],
            selectedgame: {}
        }
        this.pickGame = this.pickGame.bind(this)
    }

    async componentDidMount() {
        const hashload = async() => {
            const id = window.location.hash.slice(1);
            if (id) {
                const {data} = await axios.get(`/games/${id}`)
                this.setState({
                    selectedgame: data
                })
            } else {
                this.setState({
                    selectedgame: {}
                })
            }
        }
        window.addEventListener('hashchange', async () => {
            hashload()
        })
        hashload()
        const response = await axios.get('/games')
        this.setState({
            games: response.data
        })
    }

    async pickGame(gameId) {
        const game = await axios.get(`/games/${gameId}`)
        this.setState({
            selectedgame: game.data
        })
    }

    render() {
        return (
            <div id='games'>
                <div>
                    <a href='#'>All Games</a>
                </div>
                {
                    this.state.selectedgame.id ?
                    <SingleGame game={this.state.selectedgame}/> :
                    <Games games={this.state.games} pickGame={this.pickGame}/> 
                }
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.querySelector('#main'))