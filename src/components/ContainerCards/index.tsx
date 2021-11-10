import React, { ReactNode } from 'react';
import { Row } from 'reactstrap';

interface ContainerCardsProps {
    children: ReactNode
}

import './styles.scss'

const ContainerCards = ({ children }: ContainerCardsProps) => {
  return(
    <Row tag='section' className='container-cards container-fluid text-center gap-5'>
        <h1 className='text-36'>Mais Vendidas</h1>
        <Row tag='div' className='cards-row w-100 d-flex align-items-center justify-content-between mt-5'>
            {children}
        </Row>
    </Row>
  );
}

export default ContainerCards;