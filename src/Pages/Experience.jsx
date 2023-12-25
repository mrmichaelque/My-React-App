import React from 'React
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 300,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: 0.5,
            // markers: true,
          },
        });
      });
    },
    {scope: main}
  );

  return (
    <div ref={main}>
      <section className="section flex-center column">
        <h1>Basic ScrollTrigger with React</h1>
        <h2>Scroll down to see the magic happen!!</h2>
      </section>
      <div className="section flex-center column">
        <div className="box">box</div>
        <div className="box">box</div>
        <div className="box">box</div>


      </div>
      <section className="section"></section>
    </div>
  );
}


import Timeline from './Experience';

    const eventsData = [
      {
        date: '2012-01-01',
        title: 'Event 1',
        description: 'Description for Event 1.',
      },
      {
        date: '2013-02-15',
        title: 'Event 2',
        description: 'Description for Event 2.',
      },
      {
        date: '2014-05-20',
        title: 'Event 3',
        description: 'Description for Event 3.',
      },
      {
        date: '2015-08-10',
        title: 'Event 4',
        description: 'Description for Event 4.',
      },
      {
        date: '2016-12-25',
        title: 'Event 5',
        description: 'Description for Event 5.',
      },
      {
        date: '2017-06-30',
        title: 'Event 6',
        description: 'Description for Event 6.',
      },
      {
        date: '2018-09-05',
        title: 'Event 7',
        description: 'Description for Event 7.',
      },
      {
        date: '2019-11-11',
        title: 'Event 8',
        description: 'Description for Event 8.',
      },
      {
        date: '2020-04-01',
        title: 'Event 9',
        description: 'Description for Event 9.',
      },
      {
        date: '2021-11-25',
        title: 'The Big 30: The European Tour'
        Description: 'Description for Event 10.',
      },
      {
        date: '2022-02-15',
        title: 'Event 11',
        description: 'Description for Event 11.',
      },
      {
        date: '2023-09-30',
        title: 'Event 12',
        description: 'Description for Event 12.',
      },
    ];


const App = () => {
  return (
    <div>
      <h1>Timeline Component Example</h1>
      <Timeline events={eventsData} />
    </div>
  );
};

export default App;