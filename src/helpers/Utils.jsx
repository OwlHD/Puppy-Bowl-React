const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-e`

export default async function FetchAllPlayers() {
    try {
        const playerResponse = await fetch(`${API_URL}/players`)
        const players = await playerResponse.json()
        console.log(players)
        console.log(players.data.players)
         return players.data.players
    } catch (err) {
        console.error('Error fetching players!', err);
    }
}

export async function fetchSinglePlayer(playerId) {
    try {
        const puppyResponse = await fetch(`${API_URL}/players/${playerId}`)
        const puppy = await puppyResponse.json()
        console.log(puppy.data.player)
        return puppy.data.player
    } catch (err) {
        console.error(`Error fetching player #${playerId}!`, err);
    }
}

export async function removePlayer(playerId) {
    fetch(`${API_URL}/players`, {
        method: 'DELETE',
        });
    try {
        const response = await fetch(
        `${API_URL}/players/${playerId}`,
            {
            method: 'DELETE',
            }
        );
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error(
            `Trouble removing player #${playerId} from the roster!`,
            err
        );
    }
}

export async function addNewPlayer(puppy) {
    try {
        const response = await fetch(
            `${API_URL}/players`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: `${puppy.name}`,
                breed: `${puppy.breed}`,
                imageUrl: `${puppy.imageUrl}`,
                teamId: `${puppy.teamId}`,
                status: `${puppy.status}`
              }),
            }
          );
          const result = await response.json();
          console.log(result);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
}