import React from 'react';

function Title({children, id}) {
  return (
    <h1 className='text-2xl font-bold justify-center mb-5 underline underline-offset-8 decoration-4 font-stone-900'
        id={id && id}>
        {children}
    </h1>
  );
}

export default Title;
