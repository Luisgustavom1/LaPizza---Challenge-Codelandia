import React from 'react';
import { Button, Card, Col, Row } from 'reactstrap';

import restaurant from '../../assets/svg/restaurant.png';

import pizza from '../../assets/svg/pizza pic 1.png';
import tomato from '../../assets/svg/pngfuel.png';
import pizzaPic2 from '../../assets/svg/pizza pic 2.png';

import './styles.scss'

const SectionRestaurant: React.FC = () => {
  return (
    <Row tag='section' className='container-fluid restaurant-container bg-gray-light-custom position-relative'>
        <img 
            src={tomato}
            alt='Image tomato'
            className='img-tomato position-absolute'
        />
        <Col className='position-relative'>
            <Card
                className='card-pizza position-absolute rounded-circle ms--5 mt-4'
            >
                <img
                    src={pizza}
                    alt='Imagem pizza'
                />
            </Card>
            <img 
                src={restaurant}
                alt='Imagem restaurante'
                className='ms-4'
            />
        </Col>
        <Col className='about-container position-relative'>
            <div className='text-36 text-dark-custom font-weight-600 d-flex mb-3'>
                Sobre a La P
                <p className='text-secondary'>i</p>
                <p className='text-primary'>z</p>
                <p className='text-green-custom'>z</p>
                a
            </div>
            <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. 
            </p>
            <Button className='text-dark-custom border-0 bg-secondary read-more-button font-weight-600'>Ler Mais</Button>
        </Col>
        <Card
            className='card-pizza-2 rounded-circle position-absolute'
        >
            <img 
                src={pizzaPic2}
                alt='Imagem pizza 2'
            />
        </Card>
    </Row>
  );
}

export default SectionRestaurant;