import FetchAllPlayers from "../helpers/Utils"
import PuppyCard from "./PuppyCard"
import {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    const [state, setState] = useState({
        query: '',
        list: []
    })
    function handleChange(e) {
        console.log(players)
        const results = players.filter(player =>{
            if (e.target.value === '') return players
            return player.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            query: e.target.value,
            list: results
        })
    }
    useEffect(()=>{
        async function fetchPlayers() {
            setPlayers(await FetchAllPlayers())
        }
        fetchPlayers()
    },[])
    return (
        <div>
            <Form className='d-flex'>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={state.query}
                    onChange={handleChange}
                    />
                </Col>
                </Row>
            </Form>
            <Row xs={1} md={2} lg={3}>
            {
                (state.query === '' ? players.map((player)=>{
                    return (
                        <PuppyCard key={player.id} player={player}/>
                    )
                }) : !state.list.length ? 'No puppies found including that search term.' : state.list.map((player)=>{
                    return (
                        <PuppyCard key={player.id} player={player}/>
                    )
                }))
                /* players.map((player)=>{
                    return (
                        <PuppyCard key={player.id} player={player}/>
                    )
                }) */
            }
            </Row>
        </div>
    )
}