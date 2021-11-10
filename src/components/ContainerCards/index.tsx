import { ReactNode } from 'react';
import { Row } from 'reactstrap';

interface ContainerCardsProps {
    children: ReactNode
}

import fish from '../../assets/svg/european-pilchard 2.png';
import mashroom from '../../assets/svg/Mashroom 3.png';
import leaf from '../../assets/svg/Leaf.png';
import chili from '../../assets/svg/pexels-karolina-grabowska-4033324-removebg-preview.png'

import './styles.scss'

const ContainerCards = ({ children }: ContainerCardsProps) => {
  return(
    <Row tag='section' className='container-cards container-fluid text-center gap-5'>
        <img 
          src={fish}
          alt='Imagem peixe'
          className='img-fish position-absolute'
        />
        <img 
          src={mashroom}
          alt='Imagem mashroom'
          className='img-mashroom position-absolute'
        />
        <h1 className='text-36'>Mais Vendidas</h1>
        <Row tag='div' className='cards-row w-100 d-flex align-items-center justify-content-between mt-5 mx-auto'>
          {children}
          <img 
            src={leaf}
            alt='Imagem Leaf'
            className='img-leaf position-absolute'
          />
        </Row>
        <img 
          src={chili}
          alt='Image chili'
          className='img-chili position-absolute'
        />
    </Row>
  );
}

export default ContainerCards;