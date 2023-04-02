import React from 'react';
import Title from './Title';

function Contact() {
  return (

    <div className='flex flex-col md:flex-row justify-center'>
      <div className='w-full md:w-5/12'>
        <form action="">
          <Title>Contact</Title>
          <div className='flex flex-col'>
            {/* <div class="grid gap-6 mb-6 md:grid-cols-2"> */}
              <div className='mb-6'>
                  <input placeholder='Name' type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
              </div>
              <div className='mb-6'>
                  <input placeholder='Email' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className='mb-6'>               
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
              </div>
            </div>
            <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Work With Me</button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
