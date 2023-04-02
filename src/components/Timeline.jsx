import React from 'react';
import TimelineItems from './TimelineItems';
import timeline from '../data/timeline'
import Title from './Title';

function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-5/12'>
      <Title>Timeline</Title>
        {
          timeline.map(items => (
            <TimelineItems 
                year={items.year}
                title={items.title}
                duration={items.duration}
                details={items.details}
              />
          ))
        }
      </div>
    </div>
  );
}

export default Timeline;
