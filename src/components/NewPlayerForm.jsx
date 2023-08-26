import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { addNewPlayer } from '../helpers/Utils';
import { useNavigate } from 'react-router-dom';

function NewPlayerForm() {
    const [validated, setValidated] = useState(false)
    const [puppyInfo, setPuppyInfo] = useState({})
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPuppyInfo(values => ({...values, [name]: value}))
        console.log(puppyInfo)
      }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            setButtonDisabled(true)
            console.log(puppyInfo)
            addNewPlayer(puppyInfo)
            navigate('/')
        }
    
        setValidated(true);
      };

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formPuppyName">
          <Form.Label>Puppy Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter puppy name"
            name='name'
            value={puppyInfo.name}
            onChange={handleChange}
            required
            />
            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Please enter a puppy name.</Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formPuppyBreed">
          <Form.Label>Puppy Breed</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter puppy breed"
            name='breed'
            value={puppyInfo.breed}
            onChange={handleChange}
            required
            />
            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Please enter a puppy breed.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPuppyImage">
          <Form.Label>Puppy Image URL</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter puppy image URL"
            name='imageUrl'
            value={puppyInfo.imageUrl}
            onChange={handleChange}
            required
            />
            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Please enter a puppy image url.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPuppyTeam">
          <Form.Label>Team ID</Form.Label>
          <Form.Control 
            type="number" min='1'
            placeholder="Enter puppy team ID"
            name='teamId'
            value={puppyInfo.teamId}
            onChange={handleChange}
            required
            />
            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Please enter a puppy team ID.</Form.Control.Feedback>
        </Form.Group>

        <Form.Select aria-label="Puppy field status" required onChange={handleChange} name='status'>
            <option value=''>Select Field Status</option>
            <option value="field">field</option>
            <option value="bench">bench</option>
        </Form.Select>

        <Button variant="primary" type="submit" disabled={buttonDisabled}>
          Submit
        </Button>
      </Form>
    );
  }
  
  export default NewPlayerForm;