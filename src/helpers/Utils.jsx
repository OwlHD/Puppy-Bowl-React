const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-e`

export default async function FetchAllPlayers() {
    try {
        const playerResponse = await fetch(`${API_URL}/players`)
        const players = await playerResponse.json()
        console.log(players)
        console.log(players.data.players)
         return players.data.players
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
}