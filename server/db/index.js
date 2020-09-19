const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/dealers-choice')

const Games = db.define('games', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genre: {
        type: Sequelize.STRING
    },
    maxPlayers: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    }
})

const syncAndSeed = async() => {
    await db.sync({ force: true })
    const [ LoL, Val, TfT, LoR ] = await Promise.all([
        Games.create ({name: 'League Of Legends', genre: 'MOBA', maxPlayers: '10', rating: 78, image: 'https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg'}),
        Games.create ({name: 'Valorant', genre: 'FPS', maxPlayers: '10', rating: 80, image: 'https://cdn.vox-cdn.com/thumbor/AYJV0QbznPvlk773FpuTCoOvQ1I=/0x0:5600x3150/1820x1213/filters:focal(2352x1127:3248x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66575329/LogoVersion_Beta_Key_Art_VALORANT.0.jpg'}),
        Games.create ({name: 'Teamfight Tactics', genre: 'Auto Battler', maxPlayers: '10', rating: 79, image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfe81204b8ec63e0e/5e6184a918d3347ceffbbd6d/TFT.S3_GALAXIES.ARTICLE-2.jpg'}),
        Games.create ({name: 'Legends Of Runeterra', genre: 'Digital Collectible Card Game', maxPlayers: '2', rating: 87, image:'https://d.newsweek.com/en/full/1536906/legends-runeterra-card-game-legends.webp?w=790&f=1f880706bb0ff18605b3c8e7b0989f33'})
    ])
}

module.exports = {
    syncAndSeed,
    Games
}