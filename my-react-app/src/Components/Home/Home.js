import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from './Logo/Logo.png';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={Logo}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">CONNECT</Button>
		<Button variant="primary">ABOUT</Button>
		<Button variant="primary">NEWS</Button>
		<Button variant="primary">CONTACT</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;