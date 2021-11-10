import React from 'react';
import { Row } from 'reactstrap';

import pizzaImg from '../../assets/svg/getulio-moraes-Wz3u9_GtkWc-unsplash 1.png'

import plant from '../../assets/svg/plant.png'
import './styles.scss'

const Header: React.FC = () => {
  return (
      <Row tag='header' className='position-relative d-flex align-items-center justify-content-center'>
        <img src={pizzaImg} className='img-fluid' alt='Banner pizza'/>
        <div className='position-absolute text-white-custom d-flex container-text'>
          La P
          <p className='text-secondary'>i</p>
          <p className='text-primary'>z</p>
          <p className='text-green-custom'>z</p>
          a
        </div>
        <img 
          src={plant}
          alt='Imagem Planta'
          className='img-plant position-absolute'
        />
      </Row>
  );
}

export default Header;