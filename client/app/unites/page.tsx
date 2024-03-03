import React from 'react';
import dynamic from 'next/dynamic';
import './carte.css';
const DynamicMap = dynamic(() => import('../../composants/Carte/Carte'), {
  ssr: false
});

const CartePage = (props: any) => {
  const { position, zoom } = props;

  return (
    <main className="main_carte">  
      <DynamicMap />
    </main>
  );
}

export default CartePage;
