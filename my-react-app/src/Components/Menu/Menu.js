import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Creators from './Images/1.jpg';
import Hire from './Images/2.jpg';
import Audience from './Images/3.jpg';
import './Images/menu.css';

function Menu() {
  return (

    <div className='images'>
    <Card >
      <Card.Img  src={Creators} className='cards' />
    </Card>

    <Card>
      <Card.Img  src={Hire} className='cards' />
    </Card>

    <Card >
      <Card.Img  src={Audience} className='cards' />
    </Card>


    </div>
    
  );
}

export default Menu;