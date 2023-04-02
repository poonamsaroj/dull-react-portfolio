import React from 'react';

function PorfolioItem({title, imgUrl, stack, link}) {
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
        <img 
            src={imgUrl} 
            alt="porfolio"
            className='w-full h-36 md:h-48 object-cover cursor-pointer' />
        <div>
            <h3 className='text-lg md:text-xl ml-3 mb-2 md:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap ml-3 mb-3 gap-2 flex-row items-center 
                        justify-start text-xs md:text-sm'>
                {stack.map(item => (
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
                        {item}
                    </span>
                ))}
            </p>
        </div>
    </div>
  );
}

export default PorfolioItem;
