import React from 'react';

function Intro(props) {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Poonam Saroj</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Software Developer / Lazy Developer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>
            Full Stack Developer with over 5+ years of experience building web applications. Skilled with both front-end and back-end development, as well as server management and database administration.
            As a Full Stack Developer, I got to work on a variety of projects, ranging from small e-commerce websites to complex enterprise applications. 
            I am comfortable with a variety of programming languages such as JavaScript, Python, and PHP, and I am proficient in front-end frameworks like React and Angular as well as back-end frameworks like Node.js and Django.
        </p>
    </div>
  );
}

export default Intro;
