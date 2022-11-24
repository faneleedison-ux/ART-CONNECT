import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Logo from './Logo/Logo.png';
import './home.css';
import Menu from '../Menu/Menu';
import About from '../About/About';
import News from '../News/News';
import Contact from '../Contact/Contact';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="outlined"  src={Logo}  />
      <Card.Body>
        <Card.Title>WELCOME TO ART CONNECT
		
		</Card.Title>
        <Card.Text>
		Connecting South Africa's top artists. On a single swipe, connect with artists and hire. Earn money by creating. On Art Connect finding local entertainment is as close as your fingertips.
        </Card.Text>
        
		<Button className='button' variant="primary">ABOUT</Button>
		<Button  className='button' variant="primary">NEWS</Button>
		<Button  className='button' variant="primary">CONTACT</Button>
		
      </Card.Body>
    </Card>
  );
}

export default BasicExample;