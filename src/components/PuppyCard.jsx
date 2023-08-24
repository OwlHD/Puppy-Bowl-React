import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function PuppyCard({player}) {
  return (
    <Card style={{ width: '18rem', margin: '5px' }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Button variant="primary" as={Link} to={`/players/${player.id}`}>More Info</Button>
      </Card.Body>
    </Card>
  );
}

