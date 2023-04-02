import React from 'react';
import PorfolioItem from './PortfolioItem';
import porfolio from '../data/porfolio';

function Porfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          porfolio.map(item => (
            <PorfolioItem
              imgUrl={item.imgUrl}
              title={item.title}
              stack={item.stack}
              link={item.link}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Porfolio;
