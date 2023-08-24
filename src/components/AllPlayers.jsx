import FetchAllPlayers from "../helpers/Utils"
import PuppyCard from "./PuppyCard"
import {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'

export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        async function fetchPlayers() {
            setPlayers(await FetchAllPlayers())
        }
        fetchPlayers()
    },[])
    return (
        <div>
            <Row xs={1} md={2} lg={3}>
            {
                players.map((player)=>{
                    return (
                        <PuppyCard key={player.id} player={player}/>
                    )
                })
            }
            </Row>
        </div>
    )
}