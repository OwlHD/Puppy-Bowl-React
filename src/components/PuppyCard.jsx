import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removePlayer } from '../helpers/Utils';

export default function PuppyCard({player}) {
  return (
    <Card style={{ width: '18rem', margin: '5px' }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Button variant="primary" as={Link} to={`/Puppy-Bowl-React/players/${player.id}`}>More Info</Button>
      </Card.Body>
    </Card>
  );
}

export function SinglePuppyCard({player}) {
  return (
    <Card style={{ width: '18rem', margin: '5px' }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
                Breed: {player.breed} <br />
                ID: {player.id} <br />
                Status: {player.status} <br />
                Team: {player.teamId}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/Puppy-Bowl-React/`}>Return To Roster</Button>
        <Button variant="primary" as={Link} to={`/Puppy-Bowl-React/`} onClick={()=>{removePlayer(player.id)}}>Remove Player</Button>
      </Card.Body>
    </Card>
  );
}

