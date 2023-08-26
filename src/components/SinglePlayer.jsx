import { useState, useEffect } from "react"
import { fetchSinglePlayer } from "../helpers/Utils"
import { Link, useParams } from 'react-router-dom';
import { SinglePuppyCard } from "./PuppyCard";

export default function SinglePlayer() {
    const [singlePlayer, setSinglePlayer] = useState({})
    const userId = useParams()

    useEffect(()=>{
        async function fetchPlayer() {
            //setSinglePlayer(await fetchSinglePlayer(userId.id))
            const myPlayer = await fetchSinglePlayer(userId.id)
            setSinglePlayer(myPlayer)
        }
        fetchPlayer()
    },[])
    return (
        <div>
            
            <SinglePuppyCard player={singlePlayer} />

        </div>
    )
}