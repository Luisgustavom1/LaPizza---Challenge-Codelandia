import { Button, Card, Col, Row } from 'reactstrap';

import './styles.scss';

import heart from '../../assets/svg/Stroke 5.png';

interface CardsProps {
    title: string;
    description: string;
    price: string;
    image: string;
}

const Cards = ({ title, description, price, image }: CardsProps) => {
  return(
    <Card className='card bg-bege-custom border-0 text-center rounded-25 mx-auto'>
        <Row tag='section'>
            <Col md='8'>
                <img
                    className='img-pizza img-fluid mt--5'
                    src={image}
                    alt={`Imagem da pizza ${title}`}
                />
            </Col>
            <Col>
                <Card className='border border-danger bg-bege-dark-custom container-icon d-flex align-items-center justify-content-center ms-4  mt--3'>
                    <img
                        className='icon-heart'
                        src={heart}
                        alt='Icon coração'
                    />
                </Card>
            </Col>
        </Row>
        <Row className='w-75 mx-auto mt-3 mb-3'>
            <h1 className='text-dark-custom text-18'>{title}</h1>
            <p className='text-gray-custom text-14'>{description}</p>
        </Row>
        <p className='text-32 font-weight-700'>R${price}</p>
        <Button className='bg-secondary border-0 button-card text-12 mx-auto mb--2 rounded-25 text-dark-custom font-weight-600'>Comprar agora</Button>
    </Card>
  );
}

export default Cards;